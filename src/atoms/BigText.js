import { HeaderTwo } from "../atoms";

const BigText = ({ text, buttonText }) => {
  return (
    <section className="mt-8 bg-gray border border-primary rounded-lg p-4 md:p-6 lg:mb-10 text-center m-auto w-11/12">
      <HeaderTwo
        className=" lg:mt-12 md:text-5xl lg:text-6xl font-verybold font-extrabold"
        text={text}
      />
      <button class="bg-primary text-white text-xs font-bold py-4 px-10 rounded-md my-10 md:my-6 text-center">
        {buttonText}
      </button>
    </section>
  );
};

export { BigText };
