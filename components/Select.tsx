import { cx } from "class-variance-authority";
import { useId } from "react";
import type { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  options: (string | { value: string; label: string })[];
}

const Select = ({
  label,
  className,
  options,
  defaultValue,
  ...rest
}: Props) => {
  const id = useId();

  return (
    <div className="flex flex-col gap-1 ">
      {label ? (
        <label htmlFor={id} className="cursor-pointer text-sm font-medium">
          {label}
        </label>
      ) : null}
      <select
        id={id}
        className={cx(
          "rounded-md text-gray-900 border-0 capitalize p-1.5 px-3 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary-600 focus-visible:outline-none",
          className
        )}
        {...rest}
      >
        {options.map((opt, index) => (
          <option
            key={index}
            value={
              typeof opt === "string"
                ? opt.replaceAll(" ", "-").toLowerCase()
                : opt.value
            }
          >
            {typeof opt === "string" ? opt : opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
