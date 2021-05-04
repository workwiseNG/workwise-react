const PriceCard = ({
  name,
  status,
  rooms,
  note,
  bill,
  buttonText,
  className,
}) => {
  return (
    <div className="border border-primary py-8 px-12 rounded-lg text-center md:mr-4 lg:mr-8 mb-16 lg:mb-0">
      <p className="text-ashOne pt-6 pb-4">{name}</p>
      <p className="text-primary font-verybold font-bold text-5xl pb-1">
        {status}
      </p>
      <p className="text-xs font-bold">{rooms}</p>
      <p className="text-xs font-thin pb-12">{bill}</p>
      <p className="text-sm font-normal">{note}</p>
      <button
        className={`bg-primary text-white text-xs font-bold py-4 px-10 md:py-2 md:px-4 lg:py-4 lg:px-10 rounded-md mt-10 text-center ${className}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default PriceCard;
