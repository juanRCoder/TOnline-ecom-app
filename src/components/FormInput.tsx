import React from "react";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

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
        {error && <FieldError className="text-sm text-destructive">{error}</FieldError>}
      </Field>
    )
  }
);
FormInput.displayName = "FormInput";