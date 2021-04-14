import React from "react";
import NavbarTwo from "../templates/NavbarTwo";
import { Footer } from "../organisms";

const Careers = () => {
  return (
    <div>
      <NavbarTwo text="Careers" element="Join our amazing team at Workwise" />
      <section className="m-auto w-10/12 mt-32">
        <p className="text-primary text-2xl font-bold">Open Positions</p>
      </section>

      <section className="m-auto w-10/12 mt-8 flex justify-between">
        <div className="slim-ash-border flex justify-between p-6 career-width  rounded-lg">
          <p className="text-lightBlack text-sm font-verybold font-bold">
            Engineering Role
          </p>
          <p className="text-primary text-xs font-verybold font-bold">
            1 open role
          </p>
        </div>

        <div className="slim-ash-border flex justify-between career-width p-6 rounded-lg">
          <p className="text-lightBlack text-sm font-verybold font-bold">
            Human Resources
          </p>
          <p className="text-primary text-xs font-verybold font-bold">
            1 open role
          </p>
        </div>
      </section>

      <section className="m-auto w-10/12 mt-8 flex justify-between">
        <div className="slim-ash-border flex justify-between p-6 career-width  rounded-lg">
          <p className="text-lightBlack text-sm font-verybold font-bold">
            Finance
          </p>
          <p className="text-primary text-xs font-verybold font-bold">
            1 open role
          </p>
        </div>

        <div className="slim-ash-border flex justify-between career-width p-6 rounded-lg">
          <p className="text-lightBlack text-sm font-verybold font-bold">
            Compliance
          </p>
          <p className="text-primary text-xs font-verybold font-bold">
            1 open role
          </p>
        </div>
      </section>

      <section className="m-auto w-10/12 mt-8 flex justify-between mb-24">
        <div className="slim-ash-border flex justify-between p-6 career-width  rounded-lg">
          <p className="text-lightBlack text-sm font-verybold font-bold">
            Design
          </p>
          <p className="text-primary text-xs font-verybold font-bold">
            1 open role
          </p>
        </div>

        <div className="slim-ash-border flex justify-between career-width p-6 rounded-lg">
          <p className="text-lightBlack text-sm font-verybold font-bold">
            Expansion and Partnerships
          </p>
          <p className="text-primary text-xs font-verybold font-bold">
            1 open role
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export { Careers };
