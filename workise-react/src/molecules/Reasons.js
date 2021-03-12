import { SmallText } from "../atoms";

const Reasons = ({ title, text }) => {
  return (
    <div className="border border-primary mt-4 p-8">
      <SmallText
        text={title}
        className="font-semibold mb-2
      "
      />
      <SmallText text={text} />
    </div>
  );
};

export { Reasons };
