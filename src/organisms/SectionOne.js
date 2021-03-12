import iPhone from "../assets/iPhone.png";
import { Aside, Reasons } from "../molecules";

const SectionOne = () => {
  return (
    <div>
      <section className="bg-gray">
        <img src={iPhone} alt="iphone" className="object-cover" />
        <div className="">
          <Aside
            title="Run your workplace with Workwise"
            text="The Workwise platform integrates with your workplace giving you and everyone in your organization a simple and seamless way to operate the workplace and its resources, and it
helps improve company wide communication so that you can keep everyone informed and focused on what's important—your tasks/goals."
          />
        </div>

        <div className="mt-12 ">
          <Reasons
            title="Enhance Employee Experience"
            text="Empower your employee to be more productive with user-friendly technology they can access from anywhere."
          />
          <Reasons
            title="Improve Your Workplace"
            text="
            Make smarter decidions about your workplace with real-time insights into how your employees interact with their environment."
          />
          <Reasons
            title="Enhance  Workplace Security"
            text="The first step to protecting your team and property? Knowing who’s on site. And with Workwise, you’ll always know who’s arriving, where they’re going and why."
          />
        </div>
      </section>
    </div>
  );
};

export { SectionOne };
