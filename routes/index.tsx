import ButtonContribute from "../components/ButtonContribute.tsx";
import Logo from "../components/Logo.tsx";
import ButtonDonate from "../islands/ButtonDonate.tsx";

export default function Home() {
  return (
    <div class="flex flex-col items-center justify-center h-full">
      <Logo />
      <p class="text-slate-300 mb-5 mt-1">
        OpenAI API Frontend Graphical User Interface (GUI)
      </p>
      <div class="flex gap-4 flex-wrap">
        <ButtonContribute />
        <ButtonDonate />
      </div>
    </div>
  );
}
