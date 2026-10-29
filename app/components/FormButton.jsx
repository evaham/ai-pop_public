"use client";

export default function FormButton({
  variant = "default",
  className = "",
  selected,
  hover,
  active,
  disabled,
  children,
  ...props
}) {
  const variants = {
    default: "form-btn",
    primary: "form-btn-primary",
    secondary: "form-btn-secondary",
    tertiary: "form-btn-tertiary",
  };

  const classes = [
    variants[variant] ?? variants.default,
    selected && "selected",
    hover && !disabled && "hovered",
    active && !disabled && "active",
    disabled && "disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  );
}