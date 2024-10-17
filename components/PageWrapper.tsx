import type { ComponentChildren } from "preact";

interface Props {
  heading: string;
  description: string;
  children: ComponentChildren;
}

export default function PageWrapper(props: Props) {
  return (
    <div>
      <h3 class="text-slate-100 text-lg leading-[29px] font-semibold">
        {props.heading}
      </h3>
      <p class="text-slate-300 leading-[29px] mb-5">
        {props.description}
      </p>
      <div class="grid grid-cols-5">
        <div class="col-span-2 grid gap-5">
          {props.children}
        </div>
        <div class="col-span-3">
        </div>
      </div>
    </div>
  );
}
