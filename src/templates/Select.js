const Select = ({ label, option1, option2, option3, option4 }) => {
  return (
    <div className="mt-8 border border-primary rounded-lg overflow-hidden shadow-lg">
      <p className="text- text-primary label-text absolute">{label}</p>
      <select className="py-4 px-4 appearance-none dropdown">
        <option value={option1}>{option1}</option>
        <option value={option2}>{option2}</option>
        <option value={option3}>{option3}</option>
        <option value={option4}>{option4}</option>
      </select>
    </div>
  );
};

export default Select;
