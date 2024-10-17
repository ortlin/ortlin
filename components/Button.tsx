import { LucideIcon } from "lucide-preact";
import Icon from "./Icon.tsx";
import type { ComponentChildren } from "preact";

interface Props {
  strokeColor: string;
  textColor: string;
  children: ComponentChildren;
  fillColor?: string;
  Icon?: LucideIcon;
  onClick?: VoidFunction;
  link?: string;
  class?: string;
}

export function Button(props: Props) {
  const Tag = props.link ? "a" : "button";
  return (
    <Tag
      href={props.link}
      onClick={props.onClick}
      class={`px-3 py-2.5 flex gap-2 rounded-xl border text-sm items-center justify-center font-semibold ${props.strokeColor} ${props.textColor} ${props.fillColor} ${props.class}`}
    >
      {props.Icon && <Icon Icon={props.Icon} size={17} />}
      {props.children}
    </Tag>
  );
}
