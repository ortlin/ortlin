import Actions from "../components/Actions.tsx";
import Logo from "../components/Logo.tsx";

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center h-full">
      <Logo />
      <p class="text-slate-300 mb-5 mt-1 text-center">
        OpenAI API Frontend Graphical User Interface (GUI)
      </p>
      <Actions />
    </div>
  );
}
