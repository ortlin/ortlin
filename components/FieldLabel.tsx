interface Props {
  text: string;
  required: boolean;
}

export default function FieldLabel(props: Props) {
  return (
    <div class="flex gap-2 items-center mb-2">
      <label class="text-slate-100 leading-[21px]">{props.text}</label>
      <div
        class={`text-xs ${props.required ? "text-red-400" : "text-slate-400"}`}
      >
        {props.required ? "Required" : "Optional"}
      </div>
    </div>
  );
}
