const HeaderTwo = ({ text, className }) => {
  return (
    <div className={` text-4xl ${className}`}>
      <p className="leading-tight">{text}</p>
    </div>
  );
};

export { HeaderTwo };
