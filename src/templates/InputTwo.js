const InputTwo = ({ value, className }) => {
  return (
    <input
      type="text"
      className={`border border-lightAsh w-8 h-8 mr-2 rounded text-center outline-none text-lg font-medium text-bodyGrey lg:w-14 lg:h-16 ${className}`}
      value={value}
    />
  );
};

export default InputTwo;
