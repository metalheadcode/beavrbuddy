"use client";

import Modal from "react-modal";
import React from "react";

type Props = {
  isOpen: boolean;
  onAfterOpen?: (e: any) => void;
  onRequestClose?: (e: any) => void;
};

export default function FormModal({
  isOpen,
  onAfterOpen,
  onRequestClose,
}: Props) {
  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      className="absolute inset-0 z-50 bg-black backdrop-blur-2xl"
    >
      <form>
        <Input
          label="Name"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Location"
          value=""
          onChange={() => {}}
        />
        <Input
          label="Budget"
          value=""
          onChange={() => {}}
        />
      </form>
    </Modal>
  );
}

type InputProps = {
  label: string;
  value: string;
  onChange: (e: any) => void;
};

const Input = ({ label, value, onChange }: InputProps) => {
  return (
    <div>
      <label>{label}</label>
      <input
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
