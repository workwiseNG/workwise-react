import React from "react";
import NavbarThree from "../templates/NavbarThree";
import workwise from "../assets/workwise.png";
import workwiseTwo from "../assets/workwiseTwo.png";
import workwiseThree from "../assets/workwiseThree.png";
import workwiseFour from "../assets/workwiseFour.png";
import workwiseFive from "../assets/workwiseFive.png";
import workwiseSix from "../assets/workwiseSix.png";
import { Aside } from "../molecules";
import { Footer, SectionTwo } from "../organisms";

const Workwise = () => {
  return (
    <div>
      <NavbarThree
        text="A better workplace for all"
        buttonText="Try for free"
        path="/tryforfree"
        textTwo={
          <p>
            Increase productivity by freeing up valuable employee, <br /> which
            is otherwise spent on routine workplace tasks.
          </p>
        }
      />

      <section className="m-auto w-9/12 my-36 grid grid-cols-12">
        <div className="col-start-1 col-end-6">
          <section
            className="rounded-t-lg px-12 pt-16"
            style={{ backgroundColor: "#EEF4FF" }}
          >
            <img src={workwise} alt="workwise" className="" />
          </section>

          <div className="">
            <p className="mt-10 text-sm font-extrabold">Feeds </p>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Everyone that belongs to your company stays informed via the
              company feeds. This stream of posts shows each employee the most
              important information at any given time. So you can be sure
              they’ll be kept up to date with the information that matters,
              without getting distracted by the rest.
            </p>
          </div>
        </div>
        <div className="col-start-7 col-end-13">
          <Aside title="Engage Your Employees" className="ml-24 my-12" />
          <div className="rounded-t-lg" style={{ backgroundColor: "#FAFAFA" }}>
            <img src={workwiseTwo} alt="workwise" className="w-full" />
          </div>
          <div className="">
            <p className="mt-10 text-sm font-extrabold">Video Posts </p>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Want people to pay attention to the latest health or travel
              advice? Share a video to explaining what's happening. You can
              engage employees about the video using the comment thread.
            </p>
          </div>
        </div>
      </section>

      <section className="m-auto w-9/12 my-36 grid grid-cols-12">
        <div className="col-start-1 col-end-6">
          <Aside
            title={
              <p>
                Get feedback and ideas <br /> from people
              </p>
            }
            className="my-12"
          />
          <div className="rounded-t-lg" style={{ backgroundColor: "#FAFAFA" }}>
            <img src={workwiseThree} alt="workwise" className="w-full" />
          </div>
          <div className="">
            <p className="mt-10 text-sm font-extrabold">
              Comments and Reactions
            </p>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              WithWorkwise, employees can easily share their opinions on posts.
              This is a less tedious and formal approach to communication and
              thus increases employee response rate.
            </p>
          </div>
        </div>
        <div className="col-start-7 col-end-13">
          <section
            className="rounded-t-lg px-12 pt-16"
            style={{ backgroundColor: "#EEF4FF" }}
          >
            <img src={workwiseFour} alt="workwise" className="" />
          </section>

          <div className="">
            <p className="mt-10 text-sm font-extrabold"> Surveys and Polls </p>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              The Survey & Polls features allow organisations to sample employee
              opinion, collect in-depth feedback or simply organize a vote on
              issues relating to the work place community.
            </p>
          </div>
        </div>
      </section>

      <section className="m-auto w-9/12 my-36 grid grid-cols-12">
        <div className="col-start-1 col-end-6">
          <section
            className="rounded-t-lg"
            style={{ backgroundColor: "#EEF4FF" }}
          >
            <img src={workwiseFive} alt="workwise" className="" />
          </section>

          <div className="">
            <p className="mt-10 text-sm font-extrabold"> Information Tank</p>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Information tank is the place to create, store and share content
              like company (HR / IT) policies, templates, guidelines and
              advisories. It's simple to use without IT support, and it puts all
              relevant company information within easy reach of your employees.
            </p>
          </div>
        </div>

        <div className="col-start-7 col-end-13">
          <Aside
            title={
              <p>
                Create a Home for <br /> Company’s Resources
              </p>
            }
            className="my-12"
          />
          <div className="rounded-t-lg" style={{ backgroundColor: "#FAFAFA" }}>
            <img src={workwiseSix} alt="workwise" className="w-full" />
          </div>
          <div className="">
            <p className="mt-10 text-sm font-extrabold">Company Directory</p>
            <p className="mt-4 text-sm leading-relaxed max-w-xs">
              Contact details of anyone in your organization can be stored and
              easily accessed by anyone in the team.
            </p>
          </div>
        </div>
      </section>

      <SectionTwo />
      <Footer />
    </div>
  );
};

export { Workwise };
