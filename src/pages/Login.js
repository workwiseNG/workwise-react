import { Link } from "react-router-dom";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Navbar from "../templates/Navbar";
import Input from "../templates/Input";

const Login = () => {
  return (
    <div>
      <SectionWrapper>
        <div>
          <Navbar />
        </div>

        <div className="md:grid grid-cols-12 lg:m-auto lg:w-10/12">
          <section className="mt-6 md:mt-12 col-start-1 col-end-5 lg:ml-4">
            <LogInIntro
              text={
                <p style={{ fontFamily: "Bw Nista Geometric DEMO" }}>
                  Enter your workwise company url and <br /> your company email
                  to gain access.
                </p>
              }
              title="Welcome Back!"
              className="placeholder-bodyGrey"
            />
          </section>

          <section className="slim-border col-start-7 col-end-13 rounded-md mt-12 px-4 md:px-10 py-4 lg:py-6 mb-16 lg:mb-0">
            <section className="flex items-center">
              <Input
                label="Your company url"
                placeholder="mentworkspace"
                type="text"
              />
              <p
                className="text-sm font-semibold text-ash mt-2 ml-2"
                style={{ fontFamily: "Bw Nista Geometric DEMO" }}
              >
                .workwise.ng
              </p>
            </section>

            <div className="mt-4">
              <Input
                label="Your company email"
                placeholder="osa@mudia.ment"
                type="email"
                className="w-full"
              />
            </div>

            <Link to="/securecode">
              <button
                className="bg-primary text-white text-xs my-4 w-full font-medium py-4 px-8 rounded-md text-center"
                style={{ fontFamily: "Bw Nista Geometric DEMO" }}
              >
                Get Secure Verification Code
              </button>
            </Link>
          </section>
        </div>
      </SectionWrapper>
      <link
        href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css"
        rel="stylesheet"
      />
    </div>
  );
};

export { Login };
