import PresenceAnimation from "./PresenceAnimation";
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
    <PresenceAnimation>
      <button
        onClick={onClick}
        className={`w-full bg-secondary rounded-full px-10 py-5 ${className}`}
      >
        <span className="text-primary-regular font-semibold text-xl">
          {label}
        </span>
      </button>
    </PresenceAnimation>
  );
}
