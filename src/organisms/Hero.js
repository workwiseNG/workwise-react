import hero from "../assets/hero.jpg";
import { HeaderOne } from "../atoms";
import Navbar from "../templates/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="md:flex md:grid-cols-12 mt-6 md:mt-20">
        <section className="col-start-2 col-end-8" style={{ flex: "1" }}>
          <HeaderOne
            text={
              <p>
                Building <span className="lg:mr-24">a </span> better workplace
                for everyone
              </p>
            }
            className="mb-4 lg:text-6xl"
          />
          <p
            className="my-4 pt-4 font-normal text-lightBlack lg:max-w-lg"
            style={{ fontSize: "15px" }}
          >
            We deliver workplace solutions and products that make the work
            environment healthier, safer, enjoyable, sustainable and more
            productive, for employees and visitors.
          </p>
          <Link to="/tryforfree">
            <button class="bg-primary focus:outline-none text-white nav-links font-verybold font-medium py-4 px-8 rounded-md mb-10">
              Try for free
            </button>
          </Link>
        </section>
        <section
          className="hidden md:block col-start-8 col-end-13 mb-4"
          style={{ flex: "1" }}
        >
          <img src={hero} alt="hero" />
        </section>
      </div>
    </div>
  );
};

export { Hero };
