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
        <div className="md:mt-96 lg:mt-64">
          <HeaderTwo
            text="Secure tools to help you run the workplace."
            className="text-center md:text-6xl lg:text-7xl lg:my-32 font-verybold font-bold lg:ml-28 lg:max-w-4xl"
          />
        </div>
      </SectionWrapper>

      <div className="m-top lg:ml-28 max-w-6xl mx-auto services-width">
        <div className="md:grid md:grid-cols-12 easily">
          <div className="col-start-2 col-end-6">
            <Aside
              title="Easily manage your visitors"
              text="Welcome your visitors and create a lasting impression with our secure visitor management feature. With a visitor management platform that supports your workplace security, you can easily identify unauthorized guests, know who is in the building in case of an emergency and much more."
              className="mb-6 lg:mb-12"
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md lg:mb-28">
              Sign up for free
            </button>
          </div>
          <div className="md:col-start-7 md:col-end-13 inner-picture">
            <img
              src={visitorManage}
              alt="dashboard"
              className="my-8 md:my-0 md:-mt-8 lg:mb-8 w-full lg:w-1/2 lg:ml-60"
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-12 mt-16 lg:mt-28">
          <div className="md:col-start-2 md:col-end-6">
            <img
              src={smartBooking}
              alt="dashboard"
              className="my-8 lg:mb-8 lg:w-full"
            />
          </div>
          <div className="col-start-9 col-end-13">
            <Aside
              title="Smarter room booking for everyone in your office"
              text="With the Workwise app, employees can easily find, and book meeting rooms based on amenities, locations and more."
              className="mb-6 lg:mb-12"
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md lg:mb-28">
              Sign up for free
            </button>
          </div>
        </div>

        <div className="md:grid md:grid-cols-12 mt-16 lg:mt-28">
          <div className="col-start-2 col-end-6">
            <Aside
              title="Effectively manage your company mails and package deliveries"
              text="When items are delivered to your office, with the app, your receptionist area can notify the recipient to let them know that their package has arrived."
              className="mb-6 lg:mb-12"
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md">
              Sign up for free
            </button>
          </div>
          <div className="col-start-7 col-end-13 inner-picture">
            <img
              src={proximity}
              alt="dashboard"
              className="mb-8 w-full md:w-5/6 lg:w-2/6 lg:ml-64"
            />
          </div>
        </div>

        <div className="md:grid md:grid-cols-12 mt-16 lg:mt-28">
          <div className="md:col-start-2 md:col-end-6">
            <img
              src={smartBooking}
              alt="dashboard"
              className="my-8 lg:mb-8 lg:w-full"
            />
          </div>
          <div className="col-start-9 col-end-13">
            <Aside
              title="One workplace app, for all "
              text="Empower employees to find, book, request and connect with everything they need to operate the workplace in real time."
              className="mb-6 lg:mb-12"
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md lg:mb-28">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export { SectionTwo };
