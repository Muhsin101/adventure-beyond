import React from "react";
import { useField } from "formik";
import { formFont, secondary } from "../utils/fonts";
import "styles/form.css";

interface FieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  marginTop?: number | string;
  number: number;
}

export const BulletedTextInput = ({
  label,
  name,
  marginTop,
  number,
  ...props
}: FieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className={`mt-${marginTop?.toString()}`}>
      <div className="flex mb-3 items-center">
        <div className="bullet">{number}</div>
        <label
          className={`text-lg mr-6 ${secondary.className}`}
          htmlFor={props.id || name}
        >
          {label}
        </label>
      </div>
      <input
        className={`w-full text-input border p-1 px-3 text-lg ${formFont.className}`}
        {...field}
        {...props}
      />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};
