const TextArea = ({ label }) => {
  return (
    <div className="mt-8 border border-primary rounded-lg overflow-hidden shadow-lg">
      <p className="text-xs text-primary label-text absolute">{label}</p>
      <textarea name="" id="" cols="30" rows="6" className=""></textarea>
    </div>
  );
};

export default TextArea;
