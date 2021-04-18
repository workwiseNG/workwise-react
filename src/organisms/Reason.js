import { SmallText } from "../atoms";

const Reason = () => {
  return (
    <div className="bg-white absolute z-10">
      <div className="mt-8 md:flex lg:-mt-28 m-auto w-10/12 relative">
        <div className="border-slim border-primary rounded-md lg:rounded-r-none lg:rounded-l-md mt-4 lg:p-8 p-6 bg-white">
          <SmallText
            text="Enhance Employee Experience"
            className="font-verybold font-bold my-4
      "
          />
          <SmallText
            text={
              <p>
                Empower your employee to be more productive with user-friendly
                <br />
                technology they can access from anywhere.
              </p>
            }
            className="leading-relaxed mb-8 lg:max-w-md"
          />
        </div>
        <div className="border-slim border-primary lg:border-0 lg:border-t-slim lg:border-b-slim rounded-md lg:rounded-none mt-4 lg:p-8 p-6 bg-white">
          <SmallText
            text="Improve Your Workplace"
            className="font-verybold font-bold my-4
      "
          />
          <SmallText
            text="Make smarter decisions about your workplace with real-time insights into how your employees interact with their environment."
            className="leading-relaxed mb-8 lg:max-w-md"
          />
        </div>

        <div className="border-slim border-primary rounded-md lg:rounded-l-none lg:rounded-r-md mt-4 lg:p-8 p-6 bg-white">
          <SmallText
            text="Enhance Workplace Security"
            className="font-verybold font-bold my-4
      "
          />
          <SmallText
            text={
              <p>
                The first step to protecting your team <br /> and property?
                Knowing who’s on site. <br /> And with Workwise, you’ll always
                know who’s arriving, where they’re going and why.
              </p>
            }
            className="leading-relaxed mb-8 lg:max-w-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Reason;
