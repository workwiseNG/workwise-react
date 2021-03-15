import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Navbar from "../templates/Navbar";
import { Link } from "react-router-dom";

const SecureCode = () => {
  return (
    <SectionWrapper>
      <Navbar />

      <div className="lg:flex">
        <section className="mt-12 lg:ml-20">
          <LogInIntro
            text="Enter your workwise company url and your company email to gain access."
            title="Enter verification code"
            className="lg:mr-56 lg:max-w-xs"
          />
        </section>

        <section className="border border-primary rounded-md mt-16 p-8 text-center">
          <input
            type="text"
            className="border border-primary w-8 h-8 mr-2 rounded-sm text-center outline-none text-lg font-medium text-bodyGrey lg:w-12 lg:h-12"
            value="1"
          />
          <input
            type="text"
            className="border border-primary w-8 h-8 mr-2 rounded-sm text-center outline-none text-lg font-medium text-bodyGrey lg:w-12 lg:h-12"
            value="2"
          />
          <input
            type="text"
            className="border border-primary w-8 h-8 mr-2 rounded-sm text-center outline-none text-lg font-medium text-bodyGrey lg:w-12 lg:h-12"
            value="2"
          />
          <input
            type="text"
            className="border border-primary w-8 h-8 mr-2 rounded-sm text-center outline-none text-lg font-medium text-bodyGrey lg:w-12 lg:h-12"
            value="7"
          />
          <input
            type="text"
            className="border border-primary w-8 h-8 mr-2 rounded-sm text-center outline-none text-lg font-medium text-bodyGrey lg:w-12 lg:h-12"
            value="9"
          />
          <input
            type="text"
            className="border border-primary w-8 h-8 mr-2 rounded-sm text-center outline-none text-lg font-medium text-bodyGrey lg:w-12 lg:h-12"
            value="3"
          />

          <Link to="/codeverified">
            <button class="bg-primary text-white text-xs py-4 px-2 rounded mt-6 w-10/12">
              Verify Code
            </button>
          </Link>
        </section>
      </div>
    </SectionWrapper>
  );
};

export { SecureCode };
