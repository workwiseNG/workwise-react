const HeaderOne = ({ text, className }) => {
  return (
    <div className={`text-primary font-semibold text-4xl ${className}`}>
      <p className="leading-none lineHeight">{text}</p>
    </div>
  );
};

export { HeaderOne };
