import { SmallText } from "../atoms";

const Aside = ({ title, text, className }) => {
  return (
    <div className={`${className}`}>
      <hr className="bg-primary w-28 mb-4 h-1" />
      <p className="text-primary text-2xl text-medium my-2">{title}</p>
      <SmallText text={text} />
    </div>
  );
};

export { Aside };
