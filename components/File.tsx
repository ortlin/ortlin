import type { JSX } from "preact/jsx-runtime";
import FieldLabel from "../components/FieldLabel.tsx";
import FieldHelp from "../components/FieldHelp.tsx";
import type { Helper } from "../components/FieldHelp.tsx";
import Icon from "../components/Icon.tsx";
import { File as FileIcon } from "lucide-preact";
import { useSignal } from "@preact/signals";
import { useRef } from "preact/hooks";

interface Props {
  name: string;
  accept: string;
  label: string;
  required: boolean;
  helpers?: Helper[];
  onChange: (name: string, value: File | null) => void;
}

export default function File(props: Props) {
  const filename = useSignal("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputWrapperClick = () => {
    if (inputRef.current) inputRef.current.click();
  };

  const handleChange = (event: JSX.TargetedEvent<HTMLInputElement, Event>) => {
    const files = event.currentTarget.files;
    const file = files ? files[0] : null;
    if (file) filename.value = file.name;
    else filename.value = "";
    props.onChange(props.name, file);
  };

  return (
    <div class="w-full">
      <FieldLabel text={props.label} required={props.required} />
      <div
        class="relative flex text-slate-300 px-4 py-2 rounded-xl border border-slate-700 focus:border-slate-600 w-full cursor-pointer"
        onClick={handleInputWrapperClick}
      >
        <input
          type="file"
          ref={inputRef}
          accept={props.accept}
          onChange={handleChange}
          class="invisible w-0 h-0 outline-none"
        />
        <div class="flex justify-between items-center mr-4">
          <div>{filename.value || "Choose file"}</div>
          <Icon
            Icon={FileIcon}
            size={19}
            class="text-slate-700 absolute top-2.5 right-2"
          />
        </div>
      </div>
      <FieldHelp
        helpers={props.helpers}
      />
    </div>
  );
}
