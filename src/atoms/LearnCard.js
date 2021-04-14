import learnImage from "../assets/learnImage.svg";

const LearnCard = ({ question }) => {
  return (
    <div className="border-l border-t border-b border-ashTwo rounded-lg p-4 my-6">
      <p className="text-xs font-extrabold pb-2">{question}</p>
      <div className="flex items-center">
        <img src={learnImage} alt="learnImage" className="mr-2" />
        <p className="text-primary font-bold text-xs -mt-4">
          Osamudiamen Imasuen
        </p>
      </div>
      <p className="text-xs font-thin learn -mt-4">Just now</p>
    </div>
  );
};

export default LearnCard;
