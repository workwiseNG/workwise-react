import { SectionWrapper } from "../layout/SectionWrapper";
import Navbar from "../templates/Navbar";
import meetingOne from "../assets/meetingOne.png";
import googlePlay from "../assets/googlePlay.png";
import iosStore from "../assets/iosStore.png";
import { Aside } from "../molecules";
import privateDashboard from "../assets/privateDashboard.png";
import meetingtwo from "../assets/meetingTwo.png";
import calendar from "../assets/calendar.png";
import app from "../assets/app.png";
import tablet from "../assets/tablet-ipad.svg";
import dashTwo from "../assets/dashTwo.png";
import { HeaderTwo } from "../atoms";
// import visitor from "../assets/visitor.png";
// import visitorOne from "../assets/visitorTwo.png";
// import organization from "../assets/organizations.png";
import { Footer } from "../organisms";

const MeetingRoom = () => {
  return (
    <div>
      <SectionWrapper>
        <Navbar />
      </SectionWrapper>

      <div className="grid grid-cols-12 mt-12">
        <div className="col-start-3 col-end-8">
          <p className="uppercase text-primary text-small font-bold mb-4 track">
            Meeting Rooms
          </p>
          <p className="text-primary font-bold leading-tight text-5xl">
            Book meeting rooms in less than 5 minutes
          </p>
          <p className="text-sm leading-relaxed text-lightBlack my-4">
            Welcome guests with an easy-to-use visitor management <br />
            solution that keeps your workplace safe and saves your <br />
            receptionist time and energy.
          </p>
          <div className="flex items-center mt-10">
            <img
              src={googlePlay}
              alt="googlePlay"
              className="-ml-4 playStore"
            />
            <img src={iosStore} alt="iosStore" className="w-40 h-12" />
          </div>
        </div>

        <div className="col-start-9 col-end-13 rounded-lg">
          <img src={meetingOne} alt="meetingOne" className="" />
        </div>
      </div>

      <div className="grid grid-cols-12 mt-20">
        <div className="col-start-2 col-end-6">
          <Aside
            title="Eliminate conflicts & double booking automatically"
            text="A proper room booking system will automatically detect and prevent users from booking rooms that already have meetings. This pre-emptive method of detection and prevention eliminates majority of office productivity related problem of having to find a vacant room. "
          />
          <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md mt-10">
            Get Started
          </button>
        </div>
        <div className="col-start-7 col-end-13">
          <img
            src={privateDashboard}
            alt="privateDashboard"
            className="inner-picture"
          />
        </div>
      </div>

      <div className="grid grid-cols-12 mt-20">
        <div className="col-start-2 col-end-6">
          <Aside
            title="Multiple methods of booking"
            text="Choosing a room booking system that provides various avenues for booking can simplify the process of finding and reserving a room even easier. From web based interface that can be accessed through any browser to a mobile application or a wall-mounted room display panel can provide staff who are always on the move to be able to find and reserve rooms. "
          />
          <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md mt-10">
            Get Started
          </button>
        </div>
        <div className="col-start-7 col-end-13 rounded-lg relative">
          <div className="flex">
            <img
              src={dashTwo}
              alt="dashTwo"
              className="absolute z-10 w-4/12 top-24 -left-12"
            />
            <img src={meetingtwo} alt="meetingtwo" className="" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 mt-40">
        <div className="col-start-2 col-end-6">
          <Aside
            title="Better usage of rooms"
            text="When proper controls and a structured policy for usage is implemented, usage of rooms can improve. A room booking system that provides insight into the usage of rooms and the patterns of bookings and cancellations can help management better understand their office and plan the office space for greater efficiencies. "
          />
        </div>
      </div>

      <div className="m-auto w-10/12 text-center mt-72 mb-28">
        <HeaderTwo
          text="Find and reserve spaces at your desk or on the go."
          className=" lg:mt-12 lg:text-7xl font-verybold font-extrabold"
        />
      </div>

      <section className="m-auto w-10/12 mt-20">
        <div className="flex">
          <section className="slim-border rounded-r-none rounded-l-md p-8">
            <div>
              <img src={calendar} alt="calendar" className="meeting-icon" />
            </div>
            <p className="font-verybold text-lightBlack font-bold my-4">
              Calendar Plug-ins
            </p>
            <p className="text-lightBlack text-sm leading-relaxed">
              Find and reserve spaces on your desktop through your existing
              calendar software without even opening another tab.
            </p>
          </section>

          <section className="slim-border lg:border-r-0 lg:border-l-0 p-8">
            <div>
              <img src={app} alt="calendar" className="w-1/12" />
            </div>
            <p className="font-verybold text-lightBlack font-bold my-4">
              Workwise Mobile App
            </p>
            <p className="text-lightBlack text-sm leading-relaxed">
              Workwise solutions in the palm of your hands. Check-in to meetings
              and find and book spaces, all on-the-go.
            </p>
          </section>

          <section className="slim-border rounded-l-none rounded-r-md p-8">
            <div>
              <img src={tablet} alt="meetingIpad" className="meeting-icon" />
            </div>
            <p className="font-verybold text-lightBlack font-bold my-4">
              Room Displays
            </p>
            <p className="text-lightBlack text-sm leading-relaxed">
              Need to find a space on the go? Check availability and book a
              space directly from the room display with just a few taps.
            </p>
          </section>
        </div>
      </section>

      {/* <section className="m-auto w-9/12 my-28">
        <img src={organization} alt="organization" />
      </section> */}

      <Footer />
    </div>
  );
};

export { MeetingRoom };
