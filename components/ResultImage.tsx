interface Props {
  image: string;
}

export default function ResultImage(props: Props) {
  return props.image
    ? <img src={props.image} class="w-full aspect-auto object-cover" />
    : null;
}
