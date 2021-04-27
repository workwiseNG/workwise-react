import iPhone4x from "../assets/iPhone4x.png";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Aside } from "../molecules";
import Reason from "./Reason";

const SectionOne = () => {
  return (
    <div>
      <section className="bg-gray ">
        <SectionWrapper>
          <section className="md:flex items-start">
            <img
              src={iPhone4x}
              alt="iphone"
              className="w-full md:w-7/12 lg:w-8/12 lg:z-20 lg:-mt-12 h-auto"
            />
            <div className="md:mt-10 lg:mt-20">
              <Aside
                title={
                  <p>
                    Run your <span className="lg:mr-24">workplace</span> with
                    Workwise
                  </p>
                }
                text="The Workwise platform integrates with your workplace giving you and everyone in your organization a simple and seamless way to operate the workplace and its resources, and it
helps improve company wide communication so that you can keep everyone informed and focused on what's important—your tasks/goals."
                className="lg:max-w-sm lg:-ml-20 lg:mt-12"
              />
            </div>
          </section>
        </SectionWrapper>

        <Reason />
      </section>
    </div>
  );
};

export { SectionOne };
