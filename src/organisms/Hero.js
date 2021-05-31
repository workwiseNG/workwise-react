import hero from "../assets/hero.jpg";
import { HeaderOne, SmallText } from "../atoms";
import Navbar from "../templates/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="md:grid md:grid-cols-12 mt-6 md:mt-20">
        <section className="col-start-2 col-end-8">
          <HeaderOne
            text={
              <p>
                Building <span className="lg:mr-24">a </span> better workplace
                for everyone
              </p>
            }
            className="mb-4 lg:text-6xl"
          />

          <SmallText
            text="We deliver workplace solutions and products that make the work environment healthier, safer, enjoyable, sustainable and more productive, for employees and visitors."
            className="my-4 pt-4 lg:max-w-lg"
          />
          <Link to="/tryforfree">
            <button class="bg-primary focus:outline-none text-white nav-links font-verybold font-medium py-4 px-8 rounded-md mb-10">
              Try for free
            </button>
          </Link>
        </section>
        <section className="mt-12 hidden md:block col-start-8 col-end-12 lg:-ml-16 mb-4">
          <img src={hero} alt="hero" />
        </section>
      </div>
    </div>
  );
};

export { Hero };
