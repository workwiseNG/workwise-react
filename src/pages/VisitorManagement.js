import { SectionWrapper } from "../layout/SectionWrapper";
import Navbar from "../templates/Navbar";
import { Aside } from "../molecules";
import visitorDashboard from "../assets/visitorDashboard.png";
import feedback from "../assets/feedback.png";
import packageDelivery from "../assets/package.png";
import googlePlay from "../assets/googlePlay.png";
import iosStore from "../assets/iosStore.png";
import visitor from "../assets/visitor.png";
import visitorOne from "../assets/visitorTwo.png";
import { BigText } from "../atoms";
import organization from "../assets/organizations.png";
import { Footer } from "../organisms";

const VisitorManagement = () => {
  return (
    <div>
      <SectionWrapper>
        <Navbar />
      </SectionWrapper>

      <div className="grid grid-cols-12 mt-12">
        <div className="col-start-3 col-end-7">
          <p className="uppercase text-primary text-small font-bold mb-4 track">
            Visitor Management
          </p>
          <p className="text-primary font-bold leading-tight text-5xl">
            Improve how you welcome your <br /> guests.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack my-4">
            Welcome guests with an easy-to-use visitor management <br />
            solution that keeps your workplace safe and saves your <br />
            receptionist time and energy.
          </p>
          <div className="flex items-center mt-10">
            <img src={googlePlay} alt="googlePlay" className="-ml-4 w-4/12" />
            <img src={iosStore} alt="iosStore" className="w-40 h-12" />
          </div>
        </div>

        <div className="col-start-7 col-end-13">
          <img src={visitor} alt="visitor" />
          <img
            src={visitorOne}
            alt="visitorOne"
            className="w-2/4 ml-40 -mt-16"
          />
        </div>
      </div>

      <section className="m-auto w-10/12 my-40">
        <div className="flex">
          <div className="slim-border rounded-r-none rounded-l-md mt-4 p-12 bg-white">
            <p className="font-verybold text-lightBlack font-bold text-sm  my-4">
              01. <br /> Visitors sign in on a mobile kiosk
            </p>
            <p className="text-lightBlack text-sm leading-relaxed">
              When a visitor arrives, they’ll enter their details and sign
              documents right on the mobile device.
            </p>
          </div>

          <div className="middle-border lg:border-r-0 lg:border-l-0 mt-4 p-12 bg-white">
            <p className="font-verybold text-lightBlack font-bold text-sm  my-4">
              02. <br /> Workwise notifies their host
            </p>
            <p className="text-lightBlack text-sm leading-relaxed">
              Workwise automatically alerts your employee when their guest
              arrives--saving you time and hassle.
            </p>
          </div>

          <div className="slim-border rounded-l-none rounded-r-md mt-4 p-12 bg-white">
            <p className="font-verybold text-lightBlack text-sm font-bold my-4">
              03. <br /> The employee welcomes their visitor
            </p>
            <p className="text-lightBlack text-sm leading-relaxed">
              The employee knows who to greet and when, making awkward meetings
              a thing of the past.
            </p>
          </div>
        </div>
      </section>

      <div className="lg:ml-28 mb-20">
        <div className="grid grid-cols-12">
          <div className="col-start-2 col-end-6">
            <Aside
              title="Package Delivery"
              text="Effectively manage your company mails & package deliveries. When items are delivered to the reception area, the recipient gets a notification to let them know their package has arrived."
              className="mb-12"
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md mb-28">
              Get Started
            </button>
          </div>
          <div className="col-start-7 col-end-13">
            <img
              src={packageDelivery}
              alt="dashboard"
              className="mb-8 inner-picture"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 mt-28">
          <div className="col-start-2 col-end-6">
            <Aside
              title="Upcoming Appointment Display"
              text="Give your visitors a welcoming experience from their first point of contact. With upcoming appointment displays, even your security post can know who to expect, whom they have come to see, what company they are going."
              className="mb-12"
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md mb-28">
              Get Started
            </button>
          </div>
          <div className="col-start-7 col-end-13">
            <img
              src={visitorDashboard}
              alt="dashboard"
              className="mb-8 lg:w-full"
            />
          </div>
        </div>

        <div className="grid grid-cols-12 mt-28">
          <div className="col-start-2 col-end-6">
            <Aside
              title="Feedback Channels"
              text="Effectively collect useful feedback from your visitors at the point of checking-out of your office premise. Visitors can rate how effective the service they received is."
              className="mb-12"
            />
            <button class="bg-primary text-white text-sm font-bold py-4 px-8 rounded-md">
              Get Started
            </button>
          </div>
          <div className="col-start-7 col-end-13">
            <img src={feedback} alt="dashboard" className="mb-8 lg:w-full" />
          </div>
        </div>
      </div>

      <div className="bg-gray">
        <section className="m-auto w-4/6 pt-20 grid grid-cols-12">
          <div className="col-start-1 col-end-6">
            <Aside
              title="Do more with Workwise’s Visitor Management Feature"
              text="Design a workplace where everything—visitors, deliveries, rooms—is seamless."
              className="mb-12"
            />
          </div>
          <div className="col-start-10 col-end-13">
            <p className="font-verybold text-lightBlack font-bold text-sm my-4">
              {/* font-normal text-sm text-lightBlack leading-relaxed */}
              01. <br /> Don’t keep guests waiting
            </p>
            <p className="font-normal text-sm text-lightBlack leading-relaxed">
              Workwise Visitor Management sends email and SMS notifications to
              the host thereby eliminating the need for the receptionist to
              track the host down.
            </p>
          </div>
        </section>

        <section className="m-auto w-4/6 grid grid-cols-12 mt-8">
          <div className="col-start-1 col-end-4">
            <p className="font-verybold text-lightBlack font-bold text-sm  my-4">
              02. <br /> Make a great first impression
            </p>
            <p className="font-normal text-sm text-lightBlack leading-relaxed">
              Hosts can pre-register guests and send email invites filled with
              everything they need to know about their upcoming visits to speed
              up the check-in process.
            </p>
          </div>

          <div className="col-start-5 col-end-9">
            <p className="font-verybold text-lightBlack font-bold text-sm  my-4">
              03. <br /> Enhance security
            </p>
            <p className="font-normal text-sm text-lightBlack leading-relaxed">
              The first step to protecting your team and property is knowing
              who’s onsite. With Workwise, you’ll always know who’s arriving,
              where they are going and why.
            </p>
          </div>

          <div className="col-start-10 col-end-13">
            <p className="font-verybold text-lightBlack font-bold text-sm  my-4">
              04. <br /> Do more with your visitor data
            </p>
            <p className="font-normal text-sm text-lightBlack leading-relaxed">
              Spot trends to make better decisions like staffing and personnel
              planning for your reception. You can export unfiltered data from
              our app or send to reporting tools to help visualize your data.
            </p>
          </div>
        </section>

        <section className="m-auto w-4/6 grid grid-cols-12 mt-8">
          <div className="col-start-1 col-end-4">
            <p className="font-verybold text-lightBlack font-bold text-sm  my-4">
              05. <br /> Easily identify unauthorized visitors
            </p>
            <p className="font-normal text-sm text-lightBlack leading-relaxed">
              By identifying guests with visitor badges, our app makes it easy
              to quickly identify people who are on-site without authorization.
              This can be key in help security keep peace and order in your
              workplace.
            </p>
          </div>

          <div className="col-start-5 col-end-9">
            <p className="font-verybold text-lightBlack font-bold text-sm  my-4">
              06.
              <br /> Know who’s on site in the case of an emergency
            </p>
            <p className="font-normal text-sm text-lightBlack leading-relaxed">
              In the event of an emergency,it is important to be able to account
              for everyone on-site. With our app, you will have records of
              guests, their expected location at any given time.
            </p>
          </div>

          <div className="col-start-10 col-end-13">
            <p className="font-verybold text-lightBlack font-bold text-sm  my-4">
              07. <br /> Watchlist restricted entries
            </p>
            <p className="font-normal text-sm text-lightBlack leading-relaxed">
              Watch lists allow you to keep certain people out, preventing them
              from ever getting on-site. When the person tries to check in, the
              receptionist sees a message saying the visitor is not allowed on
              site and she alerts security who handles the guest properly.
            </p>
          </div>
        </section>

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
    </div>
  );
};

export { VisitorManagement };
