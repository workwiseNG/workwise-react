import { SmallText } from "../atoms";

const Aside = ({ title, text, className }) => {
  return (
    <div className={` ${className}`}>
      <hr className="bg-primary w-28 mb-4 h-0.5" />
      <p className="text-primary text-xl font-bold my-2 lg:my-8 lg:max-w-xs">
        {title}
      </p>
      <SmallText text={text} className="" />
    </div>
  );
};

export { Aside };
