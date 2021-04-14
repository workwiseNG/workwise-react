import { SmallText } from "../atoms";

const AboutAside = ({ title, text, className }) => {
  return (
    <div className={` ${className}`}>
      <hr className="bg-primary w-28 mb-4 h-0.5" />
      <p className="text-primary text-2xl font-semibold mt-8">{title}</p>
      <SmallText text={text} className="text-xl font-bold" />
    </div>
  );
};

export { AboutAside };
