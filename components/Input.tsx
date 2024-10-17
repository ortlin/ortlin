import type { JSX } from "preact/jsx-runtime";
import FieldLabel from "./FieldLabel.tsx";
import FieldHelp from "./FieldHelp.tsx";
import type { Helper } from "./FieldHelp.tsx";

interface Props {
  name: string;
  type: "text" | "number";
  label: string;
  value: string;
  required: boolean;
  helpers?: Helper[];
  onChange: (name: string, value: string) => void;
}

export default function Input(props: Props) {
  const handleChange = (event: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    props.onChange(props.name, event.currentTarget.value);
  };

  return (
    <div class="w-full">
      <FieldLabel text={props.label} required={props.required} />
      <input
        type={props.type}
        value={props.value}
        onChange={handleChange}
        class="text-slate-300 px-4 py-2 bg-transparent rounded-xl border border-slate-700 outline-none focus:border-lime-600 w-full"
      />
      <FieldHelp
        helpers={props.helpers}
      />
    </div>
  );
}
