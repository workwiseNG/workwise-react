const SmallText = ({ text, className }) => {
  return (
    <div className={`font-normal text-sm ${className}`}>
      <p>{text}</p>
    </div>
  );
};

export { SmallText };
