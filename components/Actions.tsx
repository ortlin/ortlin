import ButtonDonate from "../islands/ButtonDonate.tsx";
import ButtonMenu from "../islands/ButtonMenu.tsx";
import ButtonContribute from "./ButtonContribute.tsx";

export default function Actions() {
  return (
    <div class="flex gap-4 md:gap-3 lg-gap-4">
      <ButtonContribute />
      <ButtonDonate />
      <ButtonMenu />
    </div>
  );
}
