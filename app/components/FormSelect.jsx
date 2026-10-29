'use client';

export default function FormSelect({
  focus = false,
  disabled = false,
  className = "",
  children,
  ...props
}) {
  const classes = [
    "form-select",
    focus && "focus",
    disabled && "disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <select className={classes} disabled={disabled} {...props}>
      {children}
    </select>
  );
}