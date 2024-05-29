import PresenceAnimation from "./PresenceAnimation";
import React from "react";

type Props = {
  onClick?: (event: any) => void;
  label: string;
  className?: string;
  design?: "primary" | "secondary";
};

export default function Buttons({
  onClick,
  label = "Button Label",
  className,
  design = "primary",
}: Props) {
  return (
    <PresenceAnimation>
      <button
        onClick={onClick}
        className={`w-full ${
          design === "primary"
            ? "bg-gradient-to-tr from-secondary-dark to-secondary"
            : "bg-gradient-to-tr from-primary-regular to-primary-light"
        } rounded-full px-10 py-5 ${className}`}
      >
        <span
          className={`${
            design === "primary" ? "text-primary-regular" : "text-secondary"
          } font-semibold text-xl`}
        >
          {label}
        </span>
      </button>
    </PresenceAnimation>
  );
}
