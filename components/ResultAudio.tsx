interface Props {
  audio: string;
}

export default function ResultAudio(props: Props) {
  return props.audio
    ? (
      <audio controls>
        <source src={props.audio} type="audio/mpeg" />
      </audio>
    )
    : null;
}
