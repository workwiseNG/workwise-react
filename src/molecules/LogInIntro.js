import { SmallText } from "../atoms";

const LogInIntro = ({ text, title, className }) => {
  return (
    <div className={`${className}`}>
      <div className="flex w-20">
        <hr className="bg-primary w-28  h-1" />
        <hr className="bg-ash w-28  h-1" />
      </div>
      <p className="text-primary text-2xl text-medium my-2">{title}</p>
      <SmallText text={text} className="mt-4" />
    </div>
  );
};

export { LogInIntro };
