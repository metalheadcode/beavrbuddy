import React from "react";

type Props = {
  onClick?: (event: any) => void;
  label: string;
  className?: string;
};

export default function Buttons({
  onClick,
  label = "Button Label",
  className,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`bg-primary rounded-full px-7 py-3 ${className}`}
    >
      <span className="text-slate-100 ">{label}</span>
    </button>
  );
}
