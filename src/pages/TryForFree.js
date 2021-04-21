import { useState } from "react";
import { Link } from "react-router-dom";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Input from "../templates/Input";
import Navbar from "../templates/Navbar";
import eyeOpen from "../assets/eyeOpen.svg";
import eyeClosed from "../assets/eyeClosed.svg";

const TryForFree = () => {
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  return (
    <div>
      <SectionWrapper>
        <div>
          <Navbar />
        </div>

        <div className="lg:mt-12 lg:grid grid-cols-12 lg:m-auto lg:w-10/12 mb-24">
          <section className="col-start-1 col-end-5 lg:ml-4 mt-12 lg:mt-0">
            <LogInIntro
              title={
                <p>
                  Step 01/02: <br className="mt-8" />
                  Create Your Free Account
                </p>
              }
              text={
                <div>
                  <p>
                    Password must be at least 8 characters and contain at least
                    one capital letter, one lower case letter and one number.
                  </p>
                  <p className="my-4 lg:mt-4">
                    By clicking “Next” you agree to our <br />
                    <Link className="text-primary">
                      Terms of Service, Privacy Policy
                    </Link>
                  </p>
                </div>
              }
              className="max-w-xs"
            />
          </section>

          <section className="slim-border col-start-7 col-end-13 rounded-md mb-24 px-6 lg:px-8 pb-24 pt-4 lg:py-4">
            <Input
              label="Your company email"
              placeholder="osa@mudia.ment"
              type="email"
            />
            <Input label="First name" placeholder="Osamudiamen" type="text" />
            <Input label="Last name" placeholder="Imaseun" type="text" />
            <div className="w-full relative">
              <i onClick={togglePasswordVisibility}>
                <img
                  src={passwordShown ? eyeOpen : eyeClosed}
                  alt="visible"
                  className="w-6 absolute visibility mt-4"
                />
              </i>
              <Input
                label="Your preferred password"
                placeholder="password"
                type={passwordShown ? "text" : "password"}
              />
            </div>
            <div className="float-right">
              <Link to="/yourcompany" className="text-right">
                <button class="bg-primary text-white text-sm font-medium my-4 py-4 px-20 rounded-md">
                  Next
                </button>
              </Link>
            </div>
          </section>
        </div>
      </SectionWrapper>
    </div>
  );
};

export { TryForFree };
