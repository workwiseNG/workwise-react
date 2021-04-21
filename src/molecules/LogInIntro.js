import { SmallText } from "../atoms";

const LogInIntro = ({ text, title, className, bgColor }) => {
  return (
    <div className={`${className}`}>
      <div className="flex w-28">
        <hr className="bg-primary w-36 height" />
        <hr
          className="bg-ashTwo w-36  height"
          style={{ backgroundColor: bgColor }}
        />
      </div>
      <p
        className="text-primary text-xl font-semibold my-8 font-sans"
        style={{ fontFamily: "Bw Nista Geometric DEMO" }}
      >
        {title}
      </p>
      <SmallText
        text={text}
        className="mt-4"
        style={{ fontFamily: "Bw Nista Geometric DEMO" }}
      />
    </div>
  );
};

export { LogInIntro };
