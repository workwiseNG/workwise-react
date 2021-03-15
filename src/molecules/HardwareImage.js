const HardwareImage = ({ image, title, className }) => {
  return (
    <div className={`relative text-center ${className}`}>
      <img src={image} alt="image" className="rounded lg:w-4/6" />
      <div className="absolute top-2/4 left-2/4 transform -translate-x-1/2 -translate-y-1/2 -mt-12 lg:-mt-20">
        <p className="font-bold text-base text-dark">{title}</p>
        <p className="text-primary underline text-sm">Buy Now</p>
      </div>
    </div>
  );
};

export { HardwareImage };
