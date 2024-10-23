import { Button } from "./Button.tsx";
import { Github } from "lucide-preact";

export default function ButtonContribute() {
  return (
    <Button
      Icon={Github}
      strokeColor="border-slate-600"
      textColor="text-slate-100"
      link="https://github.com/ortlin/ortlin"
    >
      <div class="hidden md:block">
        Contribute to project
      </div>
    </Button>
  );
}
