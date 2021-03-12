const HeaderTwo = ({ text, className }) => {
  return (
    <div className={`font-bold text-4xl ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export { HeaderTwo };
