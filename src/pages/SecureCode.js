import React from "react";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Navbar from "../templates/Navbar";
import { Link } from "react-router-dom";
import logo from "../assets/Group.png";
import InputTwo from "../templates/InputTwo";

const SecureCode = () => {
  return (
    <SectionWrapper>
      <Navbar image={logo} />

      <div className="lg:flex">
        <section className="mt-12 lg:ml-20">
          <LogInIntro
            text="Enter the verification code sent to your
            company email."
            title="Enter verification code"
            className="lg:mr-56 lg:max-w-xs"
          />
        </section>

        <section className="border border-primary rounded-lg mt-12 secure mb-12 lg:mb-0">
          <div className="p-6 lg:p-12">
            <InputTwo value="1" />
            <InputTwo value="2" />
            <InputTwo value="2" />
            <InputTwo value="7" />
            <InputTwo value="9" />
            <InputTwo value="3" />
            <Link to="/codeverified">
              <button class="bg-primary text-white mt-8 w-full font-bold py-4 px-8 rounded-md">
                Verify Code
              </button>
            </Link>
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
};

export { SecureCode };
