'use client';

export default function FormInput({
  type = "text",
  focus = false,
  disabled = false,
  className = "",
  ...props
}) {
  const classes = [
    "form-input",
    focus && "focus",
    disabled && "disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <input
      type={type}
      className={classes}
      disabled={disabled}
      {...props}
    />
  );
}