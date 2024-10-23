import type { PageProps } from "$fresh/server.ts";
import Alert from "../islands/Alert.tsx";
import Actions from "../components/Actions.tsx";
import Sidebar from "../islands/Sidebar.tsx";
import Logo from "../components/Logo.tsx";

export default function Layout(props: PageProps) {
  const pathName = new URL(props.url).pathname;
  const isRoot = pathName === "/";

  return (
    <div class="flex h-screen flex-col sm:flex-row">
      <Sidebar pathName={pathName} />
      <div class="flex-grow flex flex-col bg-slate-800 border-l border-slate-700">
        <div class="border-b border-slate-700 min-h-[69px] h-[69px] flex flex-row items-center justify-between px-7">
          <div class="sm:hidden">
            <Logo />
          </div>
          {!isRoot && (
            <div class="sm:ml-auto">
              <Actions />
            </div>
          )}
        </div>
        <div class="flex-grow p-6 overflow-y-auto">
          <props.Component />
        </div>
        <Alert />
      </div>
    </div>
  );
}
