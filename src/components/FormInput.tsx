import React from "react";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

type FormInputProps = {
  id: string;
  label: string;
  type?: string;
  placeholder?: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInput = React.forwardRef<HTMLInputElement, FormInputProps>(
  ({ id, label, type = "text", placeholder, error, ...rest }, ref) => {
    return (
      <div className='gap-1 rounded-xl flex flex-col'>
        {label && (<Label htmlFor={id}>{label}</Label>)}
        <Input
          id={id}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest} // pasa value, onChange, onBlur, etc.
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    )
  }
);
FormInput.displayName = "FormInput";