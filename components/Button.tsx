import { JSX } from "preact";
import { LucideIcon } from "lucide-preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import Icon from "./Icon.tsx";

interface Props extends JSX.HTMLAttributes<HTMLButtonElement> {
  Icon: LucideIcon;
  strokeColor: string;
  textColor: string;
}

export function Button(props: Props) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`px-3 py-2.5 flex gap-2 rounded-xl border text-sm items-center justify-center font-semibold ${props.strokeColor} ${props.textColor}`}
    >
      <Icon Icon={props.Icon} size={17} />
      {props.children}
    </button>
  );
}
