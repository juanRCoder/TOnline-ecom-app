import React from "react";
import { Input, Field, FieldLabel } from "@/components/ui";

type FormInputProps = {
  id: string;
  label?: string;
  type?: string;
  placeholder?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ id, label, type = "text", placeholder, error, ...props }, ref) => {
    return (
      <Field>
        {label && (<FieldLabel htmlFor={id}>{label}</FieldLabel>)}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </Field>
    )
  }
);
FormInput.displayName = "FormInput";