import type { FC, HTMLAttributes } from "react";
import { VariantProps, cx } from "class-variance-authority";
import typography from "./typography.cva";
import { useMemo } from "react";

const variantsMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subheading: "h6",
  body1: "p",
  body2: "p",
  small: "p",
} as const;

type TypographyVariant = VariantProps<typeof typography>;

type TypographyProps = Omit<
  HTMLAttributes<HTMLParagraphElement>,
  "class" | "size"
> &
  Omit<TypographyVariant, "size" | "weight" | "disabled"> & {
    size?: `${NonNullable<TypographyVariant["size"]>}/${NonNullable<
      TypographyVariant["weight"]
    >}`;
    disabled?: NonNullable<TypographyVariant["disabled"]>;
    ellipses?: number;
    tag?: keyof typeof variantsMapping;
  };

/**
 * Typography is custom component for h1-h6 and p tag
 * @function
 * @param {string} size for styleSize/styleWeight
 * @param {string} tag for h1-h6 or p tag
 * @param {string} variant for text color
 */

const Typography: FC<TypographyProps> = ({
  children,
  tag = "body1",
  className,
  disabled = false,
  size,
  variant,
  ellipses,
  ...props
}) => {
  const Component = variantsMapping[tag];

  // splitting variant name into two section. first will be size and second will be weight
  const [styleSize, styleWeight] = (size?.split("/") || []) as [
    TypographyVariant["size"],
    TypographyVariant["weight"]
  ];

  const style = useMemo(() => {
    if (ellipses) {
      return {
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        WebkitLineClamp: ellipses,
        overflow: "hidden",
      } as HTMLAttributes<HTMLParagraphElement>["style"];
    }
    return {};
  }, [ellipses]);

  return (
    <Component
      className={cx(
        typography({ disabled, variant, size: styleSize, weight: styleWeight }),
        className
      )}
      style={style}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Typography;
