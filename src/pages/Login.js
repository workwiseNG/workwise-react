import { Link } from "react-router-dom";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Navbar from "../templates/Navbar";
const Login = () => {
  return (
    <div>
      <SectionWrapper>
        <div>
          <Navbar />
        </div>

        <div className="lg:flex">
          <section className="mt-12 lg:ml-16">
            <LogInIntro
              text="Enter your workwise company url and your company email to gain access."
              title="Welcome Back!"
              className="lg:max-w-xs lg:mr-56 placeholder-bodyGrey"
            />
          </section>

          <section className="border border-primary rounded-md mt-16 p-4">
            <div>
              <label
                htmlFor="Your company url"
                className="text-xs text-primary"
              >
                Your company url
              </label>
              <section className="flex items-center">
                <input
                  type="text"
                  placeholder="mentworkspace"
                  className="border border-primary outline-none rounded-md p-2 w-9/12"
                />
                <p className="text-xs text-darkAsh ml-2">.workwise.com</p>
              </section>
            </div>

            <div className="mt-4">
              <label
                htmlFor="Your company url"
                className="text-xs text-primary"
              >
                Your company email
              </label>
              <input
                type="email"
                placeholder="osa@mudia.ment"
                className="border border-primary outline-none rounded-md p-2 w-full"
              />
            </div>

            <Link to="/securecode">
              <button class="bg-primary text-white text-xs py-4 px-2 rounded mt-4 w-full">
                Get Verification Code
              </button>
            </Link>
          </section>
        </div>
      </SectionWrapper>
    </div>
  );
};

export { Login };
