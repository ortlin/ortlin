import type { PageProps } from "$fresh/server.ts";
import { Button } from "../components/Button.tsx";
import { Github, Heart, KeyRound } from "lucide-preact";

export default function Layout(props: PageProps) {
  const handleAddAPIKeyClick = () => {
    // TODO
  };

  const handleContributeClick = () => {
    // TODO
  };

  const handleDonateClick = () => {
    // TODO
  };

  return (
    <div class="flex h-screen">
      <div class="flex flex-col bg-slate-900 w-72">
        <div class="px-8 py-5 border-b border-slate-700">
          <h1 class="text-slate-100 font-semibold text-xl">Numfray</h1>
        </div>
        <div class="flex-grow">
        </div>
        <div class="mb-6 mx-auto">
          <Button
            Icon={KeyRound}
            onClick={handleAddAPIKeyClick}
            strokeColor="border-slate-700"
            textColor="text-slate-100"
          >
            Add OpenAI API key
          </Button>
        </div>
      </div>
      <div class="flex-grow bg-slate-800 border-l border-slate-700">
        <div class="border-b border-slate-700 h-[69px] flex flex-row items-center justify-end px-7 gap-4">
          <Button
            Icon={Github}
            onClick={handleContributeClick}
            strokeColor="border-slate-600"
            textColor="text-slate-100"
          >
            Contribute to project
          </Button>
          <Button
            Icon={Heart}
            onClick={handleDonateClick}
            strokeColor="border-cyan-800"
            textColor="text-cyan-300"
          >
            Donate to our collective
          </Button>
        </div>
        <div class="p-6">
          <props.Component />
        </div>
      </div>
    </div>
  );
}
