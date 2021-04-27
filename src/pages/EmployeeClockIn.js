import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import Navbar from "../templates/Navbar";
import googlePlay from "../assets/googlePlay.png";
import iosStore from "../assets/iosStore.png";
import clockIn from "../assets/clockIn.svg";
import clockInOne from "../assets/clockInOne.svg";
import clockInTwo from "../assets/clockInTwo.svg";
import clockInThree from "../assets/clockInThree.svg";
import { Aside } from "../molecules";
import { BigText } from "../atoms";
// import organization from "../assets/organizations.png";
import { Footer } from "../organisms";

const EmployeeClockIn = () => {
  return (
    <div>
      <SectionWrapper>
        <Navbar />
      </SectionWrapper>

      <div className="m-auto w-10/12 md:grid md:grid-cols-12 mt-12">
        <div className="col-start-2 col-end-7">
          <p className="uppercase text-primary text-small font-bold mb-4 track">
            Employee-Clock-In
          </p>
          <p className="text-primary font-bold leading-tight text-3xl lg:text-5xl">
            Manage clock-in and out with your employees.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack my-4">
            Know when your employees arrive at and leave work with our
            geofencing time management and clock-in feature available in our app
            and dashboard.
          </p>
          <div className="flex items-center lg:my-10 mt-10">
            <img
              src={googlePlay}
              alt="googlePlay"
              className="-ml-4 playStore"
            />
            <img src={iosStore} alt="iosStore" className="w-40 h-12" />
          </div>
        </div>

        <div className="col-start-8 col-end-13">
          <img src={clockIn} alt="clockIn" />
        </div>
      </div>

      <div className="m-auto w-10/12 md:w-full">
        <div className="md:grid md:grid-cols-12 mt-16 lg:mt-36 mb-52 md:mb-42">
          <div className="col-start-3 col-end-6 mb-8 lg:mb-0">
            <Aside
              title="Geo Fencing"
              text="Your employee is immediately notified to clock-in if they’re around the work premises. They are also reminded to clock-out when they outside the work premises."
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md mt-10">
              Get Started
            </button>
          </div>
          <div className="col-start-8 col-end-13 rounded-lg relative">
            <div className="flex md:mt-16 lg:mt-0">
              <img src={clockInOne} alt="dashTwo" className="w-1/2 -mt-28" />
              <img
                src={clockInTwo}
                alt="meetingtwo"
                className="w-1/2 absolute z-10 right-16"
              />
            </div>
          </div>
        </div>

        <div className="md:grid md:grid-cols-12 my-36 ">
          <div className="col-start-3 col-end-6">
            <Aside
              title="Track Employee Attendance Log"
              text="Easily track your employees work attendance from a glance on your screen. You can filter and search by name/date."
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md my-10 lg:mt-10">
              Get Started
            </button>
          </div>
          <div className="col-start-7 col-end-13 rounded-lg">
            <div className="flex">
              <img src={clockInThree} alt="dashTwo" className="inner-picture" />
            </div>
          </div>
        </div>
      </div>

      <BigText
        text={
          <p>
            Boost productivity at the <br /> workplace.
          </p>
        }
        buttonText="Request Demo"
      />

      {/* <SectionWrapper>
        <img
          src={organization}
          alt="organization"
          className="object-cover lg:my-36"
        />
      </SectionWrapper> */}

      <Footer />
    </div>
  );
};

export { EmployeeClockIn };
