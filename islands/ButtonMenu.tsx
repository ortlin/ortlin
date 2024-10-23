import { Button } from "../components/Button.tsx";
import { AlignJustify } from "lucide-preact";
import { signal } from "@preact/signals";

export const mobileMenu = signal(false);

export default function ButtonMenu() {
  const handleMenuClick = () => {
    mobileMenu.value = !mobileMenu.value;
  };

  return (
    <Button
      Icon={AlignJustify}
      strokeColor="border-slate-600"
      textColor="text-slate-100"
      class="sm:hidden"
      onClick={handleMenuClick}
    >
      {null}
    </Button>
  );
}
