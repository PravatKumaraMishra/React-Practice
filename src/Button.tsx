interface Props {
  text: String;
  color?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "info"
    | "light"
    | "dark"
    | "link";
}

export default function Button({ text, color = "primary" }: Props) {
  return <button className={"btn btn-" + color}>{text}</button>;
}
