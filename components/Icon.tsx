import { LucideIcon, LucideProps } from "lucide-preact";

interface Props extends LucideProps {
  Icon: LucideIcon;
}

export default function Icon(props: Props) {
  return <props.Icon {...props} />;
}
