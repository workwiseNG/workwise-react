const HardwareImage = ({ image, title, className }) => {
  return (
    <div className={`relative text-center rounded-sm ml-8 ${className}`}>
      <img src={image} alt={title} className="" />
      <div className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 -mt-4 lg:-mt-1">
        <p className="font-verybold font-bold text-base mb-4 lg:-mt-24">
          {title}
        </p>
        <p className="text-primary font-bold underline text-xs">Buy Now</p>
      </div>
    </div>
  );
};

export { HardwareImage };
