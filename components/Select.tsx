import type { JSX } from "preact/jsx-runtime";
import FieldLabel from "./FieldLabel.tsx";
import FieldHelp from "./FieldHelp.tsx";
import type { Helper } from "./FieldHelp.tsx";
import Icon from "./Icon.tsx";
import { ChevronDown } from "lucide-preact";

export interface Option {
  title: string;
  value: string;
}

interface Props {
  name: string;
  label: string;
  value: string;
  required: boolean;
  helpers?: Helper[];
  options: Option[];
  onChange: (name: string, value: string) => void;
}

export default function Select(props: Props) {
  const handleChange = (event: JSX.TargetedEvent<HTMLSelectElement, Event>) => {
    props.onChange(props.name, event.currentTarget.value);
  };

  return (
    <div class="w-full">
      <FieldLabel text={props.label} required={props.required} />
      <div class="relative">
        <select
          type="text"
          value={props.value}
          onChange={handleChange}
          class="text-slate-300 px-4 py-2 bg-transparent rounded-xl border border-slate-700 outline-none focus:border-lime-600 w-full appearance-none"
        >
          {props.options.map((option) => (
            <option value={option.value}>{option.title}</option>
          ))}
        </select>
        <Icon
          Icon={ChevronDown}
          size={24}
          class="text-slate-700 absolute top-2.5 right-2"
        />
      </div>
      <FieldHelp
        helpers={props.helpers}
      />
    </div>
  );
}
