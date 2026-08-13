import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

export default function Alert({ children, onClose }: Props) {
  return (
    <div className="alert alert-warning alert-dismissible  w-50">
      {children}
      <button type="button" className="btn-close" onClick={onClose}></button>
    </div>
  );
}
