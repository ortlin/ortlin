interface TextHelper {
  type: "text";
  content: string;
}

interface HighlightHelper {
  type: "highlight";
  content: string;
}

interface AnchorHelper {
  type: "anchor";
  content: string;
  link: string;
}

export type Helper = TextHelper | HighlightHelper | AnchorHelper;

interface Props {
  helpers?: Helper[];
}

export default function FieldHelp(props: Props) {
  return props.helpers
    ? (
      <div class="mt-1.5 flex items-baseline gap-1 text-xs text-slate-400 leading-[17px]">
        {props.helpers.map((helper) => {
          switch (helper.type) {
            case "text":
              return <div>{helper.content}</div>;
            case "highlight":
              return (
                <div class="bg-slate-700 rounded px-1 py-0.5">
                  {helper.content}
                </div>
              );
            case "anchor":
              return (
                <a
                  href={helper.link}
                  class="block font-semibold text-blue-400"
                  target="_blank"
                >
                  {helper.content}
                </a>
              );
            default:
              break;
          }
        })}
      </div>
    )
    : null;
}
