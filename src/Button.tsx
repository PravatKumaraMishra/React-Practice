interface Props {
  text: String;
  onClick: () => void;
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

export default function Button({ text, color = "primary", onClick }: Props) {
  return (
    <button onClick={onClick} className={"btn btn-" + color}>
      {text}
    </button>
  );
}
