function SectionTitle({ children, color = "font_white" }) {
  return (
    <h2
      className={`sm:text-[3.5rem] my-5 text-[1.3rem] font-bold text-${color}`}
    >
      {children}
    </h2>
  );
}

export default SectionTitle;
