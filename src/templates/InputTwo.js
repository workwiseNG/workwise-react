const InputTwo = ({ value, className }) => {
  return (
    <input
      type="text"
      className={`border border-lightAsh w-10 h-10 input-right lg:mr-2 rounded text-center outline-none text-lg font-medium text-bodyGrey lg:w-14 lg:h-16 ${className}`}
      value={value}
    />
  );
};

export default InputTwo;
