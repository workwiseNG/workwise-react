import { HeaderTwo } from "../atoms";
import dashboard from "../assets/dashboard.png";
import dashboard2 from "../assets/dashboard2.png";
import dashboard3 from "../assets/dashboard3.png";
import { Aside } from "../molecules";

const SectionTwo = () => {
  return (
    <div>
      <div className="mt-20">
        <HeaderTwo
          text="Secure tools to help you run the workplace."
          className="text-center lg:text-5xl lg:max-w-xl lg:flex justify-center lg:ml-60 lg:mb-24"
        />
      </div>

      <section className="mt-8">
        <div className="lg:flex justify-between">
          <Aside
            title="Easily manage your guests and visitors"
            text="Welcome your visitors and create a lasting impression with our secure visitor management feature. With a visitor management platform that supports your workplace security, you can easily identify unauthorized guests, know who is in the building in case of an emergency and much more."
            className="mb-12 lg:max-w-xs"
          />
          <img src={dashboard} alt="dashboard" className="mb-8 lg:w-1/2" />
        </div>
        <button class="bg-primary text-white text-xs py-2 font-bold px-4 mb-8 rounded">
          Sign up for free
        </button>
      </section>

      <section className="">
        <div className="lg:flex justify-between">
          <Aside
            title="Smarter room booking for everyone in your office"
            text="With the Workwise app, employees can easily find, and book meeting rooms based on amenities, locations and more."
            className="mb-12 lg:mb-4 lg:max-w-xs"
          />
          <img src={dashboard2} alt="dashboard2" className="mb-8 lg:w-1/2" />
        </div>
        <button class="bg-primary text-white text-xs font-bold py-2 px-4 mb-8 rounded">
          Sign up for free
        </button>
      </section>

      <section className="">
        <div className="lg:flex justify-between">
          <Aside
            title="Effectively manage your company mails and package deliveries"
            text="When items are delivered to your office, with the app, your receptionist area can notify the recipient to let them know that their package has arrived."
            className="mb-12 lg:max-w-xs"
          />
          <img src={dashboard3} alt="dashboard3" className="mb-8 lg:w-1/2" />
        </div>
        <button class="bg-primary text-white font-bold text-xs py-2 px-4 mb-8 rounded">
          Sign up for free
        </button>
      </section>

      <section className="mt-8 bg-gray border border-primary rounded-lg p-2 text-center">
        <HeaderTwo
          text="Increase employee engagement through the roof!"
          className="lg:max-w-3xl lg:ml-40 lg:text-5xl"
        />
        <button class="bg-primary text-white font-bold text-xs py-2 px-4 mb-8 rounded mt-8">
          Find out how
        </button>
      </section>
    </div>
  );
};

export { SectionTwo };
