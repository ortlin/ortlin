import { LoaderCircle, LucideIcon } from "lucide-preact";
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
  isProcessing?: boolean;
}

export function Button(props: Props) {
  const Tag = props.link ? "a" : "button";
  const iconClass = props.isProcessing ? "animate-spin" : "";
  const iconIcon = props.isProcessing ? LoaderCircle : props.Icon;
  return (
    <Tag
      href={props.link}
      onClick={props.onClick}
      class={`px-3 py-2.5 flex gap-2 rounded-xl border text-sm items-center justify-center font-semibold ${props.strokeColor} ${props.textColor} ${props.fillColor} ${props.class}`}
    >
      {iconIcon && <Icon Icon={iconIcon} size={17} class={`${iconClass}`} />}
      {props.children}
    </Tag>
  );
}
