import React from "react";
import { InputFieldProps } from "./types";

export const InputField: React.FC<InputFieldProps> = ({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
}) => (
  <div className="flex flex-col w-full max-w-[272px]">
    <label
      htmlFor={`${label.toLowerCase()}-input`}
      className="leading-snug text-[color:var(--sds-color-text-default-default)]"
    >
      {label}
    </label>
    <input
      id={`${label.toLowerCase()}-input`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="overflow-hidden flex-1 shrink self-stretch px-4 py-3 mt-2 w-full leading-none bg-white rounded-lg border border-solid border-zinc-300 min-w-[240px] text-[color:var(--sds-color-text-default-tertiary)]"
      aria-label={label}
    />
  </div>
);
