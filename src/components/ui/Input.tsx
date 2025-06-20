import React, { HTMLInputTypeAttribute } from "react";

function Input({
  label,
  type,
  placeholder,
  register,
  error,
  disabled = false,
}: {
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  register?: any;
  error?: any;
  disabled?: boolean;
}) {
  return (
    <>
      <label className="font-medium py-2">{label}</label>
      <input
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded p-2 disabled:bg-gray-100 disabled:text-gray-900/80"
        {...register}
      />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
}

export default Input;
