import type { JSX } from "preact/jsx-runtime";
import FieldLabel from "./FieldLabel.tsx";
import FieldHelp from "./FieldHelp.tsx";
import type { Helper } from "./FieldHelp.tsx";

interface Props {
  name: string;
  label: string;
  value: string;
  required: boolean;
  helpers?: Helper[];
  onChange: (name: string, value: string) => void;
}

export default function Textarea(props: Props) {
  const handleChange = (
    event: JSX.TargetedEvent<HTMLTextAreaElement, Event>,
  ) => {
    props.onChange(props.name, event.currentTarget.value);
  };

  return (
    <div class="w-full">
      <FieldLabel text={props.label} required={props.required} />
      <textarea
        value={props.value}
        onChange={handleChange}
        rows={4}
        class="text-slate-300 px-4 py-2 bg-transparent rounded-xl border border-slate-700 outline-none focus:border-slate-600 w-full min-h-14 block"
      />
      <FieldHelp
        helpers={props.helpers}
      />
    </div>
  );
}
