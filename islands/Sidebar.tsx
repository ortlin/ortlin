import { mobileMenu } from "./ButtonMenu.tsx";
import Menu from "../components/Menu.tsx";
import ApiKeyConfigure from "../islands/ApiKeyConfigure.tsx";
import Logo from "../components/Logo.tsx";
import ModalApiKeyConfigure from "../components/ModalApiKeyConfigure.tsx";

interface Props {
  pathName: string;
}

export default function Sidebar(props: Props) {
  return (
    <>
      <div
        class={`flex flex-col bg-slate-900 sm:w-72 flex-shrink-0 ${
          mobileMenu.value ? "" : "hidden sm:block"
        }`}
      >
        <div class="px-8 py-5 border-b border-slate-700">
          <Logo />
        </div>
        <div class="flex-grow px-7 py-6 overflow-y-auto">
          <Menu pathName={props.pathName} />
        </div>
        <div class="my-6 mx-auto w-fit">
          <ApiKeyConfigure />
        </div>
      </div>
      <ModalApiKeyConfigure />
    </>
  );
}
