import Actions from "../components/Actions.tsx";
import Logo from "../components/Logo.tsx";

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center h-full">
      <div class="flex justify-between items-baseline gap-1">
        <img src="/icon.png" alt="Ortlin logo" width={40} height={40} />
        <Logo />
      </div>
      <p class="text-slate-300 mb-6 mt-2 text-center max-w-[310px]">
        A web-based graphical user interface for interacting with OpenAI models
        and APIs.
      </p>
      <Actions />
    </div>
  );
}
