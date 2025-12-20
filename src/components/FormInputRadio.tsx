import React from 'react'
import { Label } from './ui/label';

type FormInputRadioProps = {
  name: string;
  value: string;
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const FormInputRadio = React.forwardRef<HTMLInputElement, FormInputRadioProps>(
  ({ name, value, label, ...props }, ref) => {
    return (
      <Label className="flex items-center gap-2 outline-1 outline-secondary cursor-pointer p-3 rounded-md
          has-[input:checked]:outline-primary has-[input:checked]:outline-2">
        <input
          type="radio"
          name={name}
          value={value}
          ref={ref}
          className="hidden peer"
          {...props}
        />
        <span className="w-4 h-4 outline-1 rounded-full grid place-items-center
            peer-checked:bg-primary peer-checked:[&>span]:bg-secondary peer-checked:outline-none
          ">
          <span className="mt-px w-2 h-2 rounded-full" />
        </span>
        <span className="text-sm">{label}</span>
      </Label>
    )
  }
)
FormInputRadio.displayName = "FormInputRadio";