import ButtonDonate from "../islands/ButtonDonate.tsx";
import ButtonMenu from "../islands/ButtonMenu.tsx";
import ButtonContribute from "./ButtonContribute.tsx";

export default function Actions() {
  return (
    <div class="flex gap-2 md:gap-3">
      <ButtonContribute />
      <ButtonDonate />
      <ButtonMenu />
    </div>
  );
}
