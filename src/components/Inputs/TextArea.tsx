import React from "react";

type Props = {
  label: string;
  value: any;
  onChange: (event: any) => void;
  placeholder?: string;
};

export default function TextArea({
  label = "Input Label",
  value,
  onChange,
  placeholder,
}: Props) {
  return (
    <div className="w-full">
      <label className="font-semibold text-secondary-dark">{label}</label>
      <textarea
        rows={3}
        placeholder={placeholder}
        className="outline-none mt-3 border-2 border-primary-dark w-full px-3 py-2 rounded-xl"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
