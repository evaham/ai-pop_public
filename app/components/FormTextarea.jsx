'use client';

export default function FormTextarea({
  focus = false,
  disabled = false,
  className = "",
  children,
  ...props
}) {
  const classes = [
    "form-textarea",
    focus && "focus",
    disabled && "disabled",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <textarea className={classes} disabled={disabled} {...props}>
      {children}
    </textarea>
  );
}