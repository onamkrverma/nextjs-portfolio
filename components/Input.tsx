import { cx } from "class-variance-authority";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  ReactNode,
  useId,
} from "react";

interface Props
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  leftAdornment?: ReactNode | ReactNode[];
}

const Input = ({ label, leftAdornment, className, ...rest }: Props) => {
  const id = useId();

  return (
    <div className="w-full">
      {label ? (
        <label
          htmlFor={id}
          className={`text-sm font-medium leading-6 text-gray-900 dark:text-primary-50 flex gap-1 mb-1 w-fit ${
            rest.required
              ? "after:content-['*'] after:ml-0.5 after:text-red-500"
              : ""
          }`}
        >
          {label}
        </label>
      ) : null}
      <div className="flex rounded-md">
        {leftAdornment ? (
          <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 dark:text-primary-100 sm:text-sm">
            {leftAdornment}
          </span>
        ) : null}
        <input
          id={id}
          className={cx(
            `block w-full rounded-md border-0 p-1.5 px-3 text-gray-900 shadow-sm dark:bg-transparent dark:text-white
      ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1
      focus:ring-inset focus:ring-primary-500 dark:focus:ring-primary-200  sm:text-sm sm:leading-6 focus-visible:outline-none`,
            leftAdornment ? "rounded-l-none" : "rounded-l-md",
            className
          )}
          placeholder={label}
          {...rest}
        />
      </div>
    </div>
  );
};

export default Input;
