import { Link } from "react-router-dom";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Input from "../templates/Input";
import Navbar from "../templates/Navbar";
import Select from "../templates/Select";

const YourCompany = () => {
  return (
    <div>
      <SectionWrapper>
        <div>
          <Navbar />
        </div>

        <div className="lg:mt-12 lg:grid grid-cols-12 lg:m-auto lg:w-10/12">
          <section className="col-start-1 col-end-6 lg:ml-4 mt-12 lg:mt-0">
            <LogInIntro
              title={
                <p>
                  Step 02/02: <br className="mt-8" />
                  Tell us a bit about your company
                </p>
              }
              bgColor="#0A459F"
            />
          </section>

          <section className="slim-border rounded-md col-start-7 col-end-13 py-4 px-6 lg:px-8 mb-24">
            <Input
              label="Your company name"
              placeholder="osa@mudia.ment"
              type="email"
              className="w-full"
            />
            <Input
              label="Company address"
              placeholder="Osamudiamen"
              type="text"
            />
            <Select label="Company size" />

            <Input label="Company URL" placeholder="companyname.workwise.ng" />

            <div className="flex">
              <Link to="/tryforfree">
                <button class="bg-white text-primary border border-primary text-xs lg:text-sm my-4 font-bold py-4 px-8 lg:px-16 mr-4 rounded-md">
                  Go back
                </button>
              </Link>
              <Link to="/">
                <button class="bg-primary text-white text-xs lg:text-sm my-4 font-bold py-4 px-6 lg:px-12 rounded-md">
                  Create account
                </button>
              </Link>
            </div>
          </section>
        </div>
      </SectionWrapper>
    </div>
  );
};

export { YourCompany };
