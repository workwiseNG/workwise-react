const TeamImage = ({ image, name, position, className }) => {
  return (
    <div className={`circle ${className}`}>
      <div className="flex w-full h-20 justify-center items-center text-xl rounded-full text-white">
        <img className="rounded-full picture w-10/12" alt="" src={image} />
      </div>
      <div className="ml-40 -mt-8 w-full">
        <p className="text-primary text-lg font-bold">{name}</p>
        <p className="font-verybold font-bold text-xs text-black">{position}</p>
      </div>
    </div>
  );
};

export default TeamImage;
