export default function Button({
  children,
  variant = "outline",
  className = "",
  href,
  ...props
}) {
  const map = {
    outline: "btn btn--outline",
    dark: "btn btn--dark",
    light: "btn btn--light",
  };

  const classes = `${map[variant] || map.outline} ${className}`;

  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
