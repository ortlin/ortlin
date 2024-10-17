import type { PageProps } from "$fresh/server.ts";
import { Button } from "../components/Button.tsx";
import { Github } from "lucide-preact";
import Menu from "../components/Menu.tsx";
import ApiKeyManage from "../islands/ApiKeyManage.tsx";
import ButtonDonate from "../islands/ButtonDonate.tsx";
import Alert from "../islands/Alert.tsx";

export default function Layout(props: PageProps) {
  const pathName = new URL(props.url).pathname;

  return (
    <div class="flex h-screen">
      <div class="flex flex-col bg-slate-900 w-72 flex-shrink-0">
        <div class="px-8 py-5 border-b border-slate-700">
          <h1 class="text-slate-100 font-semibold text-xl">
            <a href="/">Numfray</a>
            <span class="text-slate-400 text-xs ml-1">v1.0</span>
          </h1>
        </div>
        <div class="flex-grow px-7 py-6 overflow-y-auto">
          <Menu pathName={pathName} />
        </div>
        <div class="my-6 mx-auto">
          <ApiKeyManage />
        </div>
      </div>
      <div class="flex-grow flex flex-col bg-slate-800 border-l border-slate-700">
        <div class="border-b border-slate-700 min-h-[69px] h-[69px] flex flex-row items-center justify-end px-7 gap-4">
          <Button
            Icon={Github}
            strokeColor="border-slate-600"
            textColor="text-slate-100"
            link="https://github.com/numfray/numfray"
          >
            Contribute to project
          </Button>
          <ButtonDonate />
        </div>
        <div class="flex-grow p-6 overflow-y-auto">
          <props.Component />
        </div>
        <Alert />
      </div>
    </div>
  );
}
