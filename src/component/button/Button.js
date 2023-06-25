import "./button.css";

function Button({
  children,
  bg,
  bg_hover = "none",
  text_color = "font_white",
}) {
  return (
    <button
      className={`btn bg-${bg} mt-3 py-3 px-12 rounded-full text-[1.3rem] text-${text_color} hover:${bg_hover}`}
    >
      {children}
    </button>
  );
}

export default Button;
