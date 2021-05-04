const Select = ({ label }) => {
  return (
    <div className="mt-8 border border-primary rounded-lg overflow-hidden shadow-lg">
      <p className="text- text-primary label-text absolute">{label}</p>
      <select className="py-4 px-4 appearance-none dropdown">
        <option value="volvo">1 - 40 employees</option>
        <option value="saab">41 - 80 employees</option>
        <option value="mercedes">81 - 120 employees</option>
        <option value="audi">121 - 160 employees</option>
      </select>
    </div>
  );
};

export default Select;
