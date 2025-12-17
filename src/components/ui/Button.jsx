export default function Button({ children, variant = "outline", className = "", ...props }) {
  const map = {
    outline: "btn btn--outline",
    dark: "btn btn--dark",
    light: "btn btn--light",
  };

  return (
    <button className={`${map[variant] || map.outline} ${className}`} {...props}>
      {children}
    </button>
  );
}
