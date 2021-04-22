const InputTwo = ({ value, className }) => {
  return (
    <input
      type="text"
      className={`w-12 h-12 lg:w-14 lg:h-16 lg:mr-2 border border-lightAsh rounded text-center outline-none text-lg font-medium text-bodyGrey ${className}`}
      value={value}
    />
  );
};

export default InputTwo;
// w-10 h-10
// lg:w-14 lg:h-16
