const SmallerText = ({ text, className }) => {
  return (
    <div>
      <p
        className={`font-verybold font-bold text-xs text-lightBlack leading-relaxed footerText ${className}`}
      >
        {text}
      </p>
    </div>
  );
};

export { SmallerText };
