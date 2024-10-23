import ButtonDonate from "../islands/ButtonDonate.tsx";
import { Button } from "./Button.tsx";
import ButtonContribute from "./ButtonContribute.tsx";
import { AlignJustify } from "lucide-preact";

export default function Actions() {
  const handleMenuClick = () => {};

  return (
    <div class="flex gap-4 md:gap-3 lg-gap-4">
      <ButtonContribute />
      <ButtonDonate />
      <Button
        Icon={AlignJustify}
        strokeColor="border-slate-600"
        textColor="text-slate-100"
        class="sm:hidden"
        onClick={handleMenuClick}
      >
        {null}
      </Button>
    </div>
  );
}
