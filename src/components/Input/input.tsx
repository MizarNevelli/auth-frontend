import clsx from "clsx";
import { ComponentProps } from "react";

interface InputProps extends ComponentProps<"input"> {
  label: string;
  inputClassName?: string;
}

export const Input = ({ label, inputClassName, ...props }: InputProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm">{label}:</label>
      <input
        className={clsx(
          inputClassName,
          "outline-none shadow-sm rounded-lg py-1 px-2 border border-slate-200"
        )}
        {...props}
      />
    </div>
  );
};
