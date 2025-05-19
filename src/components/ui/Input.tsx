import React, { HTMLInputTypeAttribute } from "react";

function Input({
  label,
  type,
  placeholder,
  register,
  error,
}: {
  label?: string;
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  register: any;
  error: any;
}) {
  return (
    <>
      <label className="font-medium py-2">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded p-2"
        {...register}
      />
      {error && <p style={{ color: "red" }}>{error.message}</p>}
    </>
  );
}

export default Input;
