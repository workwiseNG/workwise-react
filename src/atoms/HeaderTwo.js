const HeaderTwo = ({ text, className }) => {
  return (
    <div>
      <p className={`leading-tight text-4xl ${className}`}>{text}</p>
    </div>
  );
};

export { HeaderTwo };
