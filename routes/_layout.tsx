import type { PageProps } from "$fresh/server.ts";
import Menu from "../components/Menu.tsx";
import ApiKeyConfigure from "../islands/ApiKeyConfigure.tsx";
import Alert from "../islands/Alert.tsx";
import Logo from "../components/Logo.tsx";
import Actions from "../components/Actions.tsx";

export default function Layout(props: PageProps) {
  const pathName = new URL(props.url).pathname;
  const isRoot = pathName === "/";

  return (
    <div class="flex h-screen">
      <div class="flex flex-col bg-slate-900 w-72 flex-shrink-0">
        <div class="px-8 py-5 border-b border-slate-700">
          <Logo />
        </div>
        <div class="flex-grow px-7 py-6 overflow-y-auto">
          <Menu pathName={pathName} />
        </div>
        <div class="my-6 mx-auto">
          <ApiKeyConfigure />
        </div>
      </div>
      <div class="flex-grow flex flex-col bg-slate-800 border-l border-slate-700">
        <div class="border-b border-slate-700 min-h-[69px] h-[69px] flex flex-row items-center justify-end px-7">
          {!isRoot && <Actions />}
        </div>
        <div class="flex-grow p-6 overflow-y-auto">
          <props.Component />
        </div>
        <Alert />
      </div>
    </div>
  );
}
