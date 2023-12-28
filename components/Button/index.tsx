import { forwardRef, ForwardedRef, ButtonHTMLAttributes } from "react";
import type { VariantProps } from "class-variance-authority";
import button from "./button.cva";
import { cx } from "class-variance-authority";
import Link from "next/link";
interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  link?: string;
}

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, Props>(
  ({ type, className, title, children, disabled, link, ...rest }, ref) => {
    const classes = cx(button(rest), className);
    return (
      <>
        {link && !disabled ? (
          <Link
            href={link}
            ref={ref as ForwardedRef<HTMLAnchorElement>}
            className={cx(classes)}
            title={title}
          >
            {children}
          </Link>
        ) : (
          <button
            type={type}
            title={title}
            ref={ref as ForwardedRef<HTMLButtonElement>}
            className={classes}
            {...rest}
          >
            {children}
          </button>
        )}
      </>
    );
  }
);

Button.displayName = "Button";

export default Button;
