const SmallText = ({ text, className }) => {
  return (
    <div>
      <p
        className={`font-normal text-sm md:text-sm text-lightBlack leading-relaxed ${className}`}
      >
        {text}
      </p>
    </div>
  );
};

export { SmallText };
