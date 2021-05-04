import postcard from "../assets/postCard.png";
import postcardTwo from "../assets/postCardTwo.png";
import postcardThree from "../assets/postCardThree.png";
import { HeaderOne, SmallText } from "../atoms";
import Navbar from "../templates/Navbar";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="md:grid md:grid-cols-12 mt-10 md:mt-20">
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
            text="We empower productivity and the overall well-being of employees, while fostering an inclusive workplace community."
            className="my-4 pt-4 lg:max-w-sm"
          />
          <Link to="/tryforfree">
            <button class="bg-primary focus:outline-none text-white nav-links font-verybold font-medium py-4 px-8 rounded-md mb-10">
              Try for free
            </button>
          </Link>
        </section>
        <section className="mt-12 hidden md:block col-start-8 col-end-12 lg:-ml-16 mb-4">
          <img src={postcardThree} alt="postcard" className="w-full mt-8" />
          <img
            src={postcardTwo}
            alt="postcard"
            className="ml-24 -mt-14 lg:w-full"
          />
          <img src={postcard} alt="postcard" className="-mt-8 ml-4 lg:w-full" />
        </section>
      </div>
    </div>
  );
};

export { Hero };
