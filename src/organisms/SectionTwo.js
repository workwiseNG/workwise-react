import { HeaderTwo } from "../atoms";
import visitorManage from "../assets/visitorSmall.png";
import smartBooking from "../assets/smartBooking22.png";
import proximity from "../assets/proximity.png";
import { Aside } from "../molecules";
import { SectionWrapper } from "../layout/SectionWrapper";

const SectionTwo = () => {
  return (
    <div>
      <SectionWrapper>
        <div className="mt-64">
          <HeaderTwo
            text="Secure tools to help you run the workplace."
            className="text-center lg:text-7xl lg:my-32 font-verybold font-bold lg:ml-28 lg:max-w-4xl"
          />
        </div>
      </SectionWrapper>

      <div className="lg:ml-28">
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-end-6">
            <Aside
              title={
                <p>
                  Easily manage your <br /> guests and visitors
                </p>
              }
              text="Welcome your visitors and create a lasting impression with our secure visitor management feature. With a visitor management platform that supports your workplace security, you can easily identify unauthorized guests, know who is in the building in case of an emergency and much more."
              className="mb-12"
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md mb-28">
              Sign up for free
            </button>
          </div>
          <div className="col-start-7 col-end-13 inner-picture">
            <img
              src={visitorManage}
              alt="dashboard"
              className="mb-8 w-1/2 ml-60"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 mt-28">
          <div className="col-start-2 col-end-6">
            <Aside
              title={
                <p>
                  Smarter room booking <br /> for everyone in your office
                </p>
              }
              text="With the Workwise app, employees can easily find, and book meeting rooms based on amenities, locations and more."
              className="mb-12"
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md mb-28">
              Sign up for free
            </button>
          </div>
          <div className="col-start-7 col-end-13">
            <img
              src={smartBooking}
              alt="dashboard"
              className="mb-8 lg:w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 mt-28">
          <div className="col-start-2 col-end-6">
            <Aside
              title="Effectively manage your company mails and package deliveries"
              text="When items are delivered to your office, with the app, your receptionist area can notify the recipient to let them know that their package has arrived."
              className="mb-12"
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md">
              Sign up for free
            </button>
          </div>
          <div className="col-start-7 col-end-13 inner-picture">
            <img src={proximity} alt="dashboard" className="mb-8 w-2/6 ml-64" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { SectionTwo };
