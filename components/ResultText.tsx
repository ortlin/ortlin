interface Props {
  text: string;
}

export default function ResultText(props: Props) {
  return props.text
    ? (
      <textarea
        class="text-slate-300 px-4 py-2 bg-transparent rounded-xl border border-slate-700 outline-none focus:border-slate-600 w-full min-h-24 block"
        rows={10}
      >
        {props.text}
      </textarea>
    )
    : null;
}
