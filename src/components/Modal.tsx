import React, { ReactNode } from "react";

type Props = {
  children?: ReactNode;
  isOpen: boolean;
};

export default function Modal({ children, isOpen }: Props) {
  if (isOpen) {
    return (
      <div className="z-50 fixed inset-0 bg-black/50 backdrop-blur-xl flex items-center justify-center overflow-y-scroll no-scrollbar">
        {children}
      </div>
    );
  }
}
