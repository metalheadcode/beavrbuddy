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
      className={`bg-secondary rounded-full px-10 py-5 ${className}`}
    >
      <span className="text-primary font-semibold text-xl">{label}</span>
    </button>
  );
}
