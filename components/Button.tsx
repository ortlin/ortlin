import { LucideIcon } from "lucide-preact";
import Icon from "./Icon.tsx";
import type { ComponentChildren } from "preact";

interface Props {
  Icon: LucideIcon;
  strokeColor: string;
  textColor: string;
  onClick?: VoidFunction;
  link?: string;
  children: ComponentChildren;
}

export function Button(props: Props) {
  const Tag = props.link ? "a" : "button";
  return (
    <Tag
      href={props.link}
      onClick={props.onClick}
      class={`px-3 py-2.5 flex gap-2 rounded-xl border text-sm items-center justify-center font-semibold ${props.strokeColor} ${props.textColor}`}
    >
      <Icon Icon={props.Icon} size={17} />
      {props.children}
    </Tag>
  );
}
