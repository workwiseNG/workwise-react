import { Link } from "react-router-dom";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Input from "../templates/Input";
import Navbar from "../templates/Navbar";

const TryForFree = () => {
  return (
    <div>
      <SectionWrapper>
        <div>
          <Navbar />
        </div>

        <div className="lg:mt-12 lg:grid grid-cols-12 lg:m-auto lg:w-10/12 mb-24">
          <section className="col-start-1 col-end-5 lg:ml-4">
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
                  <p className="mt-4">
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

          <section className="slim-border col-start-7 col-end-13 rounded-md mb-24 px-8 py-4">
            <Input
              label="Your company email"
              placeholder="osa@mudia.ment"
              type="email"
            />
            <Input label="First name" placeholder="Osamudiamen" type="text" />
            <Input label="Last name" placeholder="Imaseun" type="text" />
            <Input
              label="Your preferred password"
              placeholder="osa@mudia.ment"
              type="password"
            />

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
