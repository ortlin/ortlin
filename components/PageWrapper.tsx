import type { ComponentChildren } from "preact";
import { Link } from "lucide-preact";
import Icon from "./Icon.tsx";

interface Props {
  heading: string;
  description: string;
  docUrl: string;
  children: ComponentChildren;
}

export default function PageWrapper(props: Props) {
  return (
    <div class="max-w-[800px]">
      <h3 class="text-slate-100 text-lg leading-[29px] font-semibold flex items-center gap-3">
        {props.heading}
        <a href={props.docUrl} class="text-slate-400" target="_blank">
          <Icon Icon={Link} size={18} />
        </a>
      </h3>
      <p class="text-slate-300 leading-[29px] mb-5">
        {props.description}
      </p>
      <div class="grid grid-cols-2 gap-7">
        {props.children}
      </div>
    </div>
  );
}
