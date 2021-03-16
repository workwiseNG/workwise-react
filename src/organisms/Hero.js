import postcard from "../assets/postCard.png";
import postcardTwo from "../assets/postCardTwo.png";
import postcardThree from "../assets/postCardThree.png";
import { HeaderOne, SmallText } from "../atoms";
import Navbar from "../templates/Navbar";

const Hero = () => {
  return (
    <div>
      <Navbar />
      <div className="lg:flex justify-between pb-8">
        <section className="mt-16 lg:ml-28">
          <HeaderOne
            text="Building a better workplace for everyone."
            className="mb-4 lg:text-5xl lg:max-w-xs"
          />

          <SmallText
            text="We empower productivity and the overall well-being of employees, while fostering an inclusive workplace community."
            className="my-4 pt-4 lg:max-w-sm"
          />

          <button class="bg-primary text-white text-xs py-2 px-4 rounded">
            Try for free
          </button>
        </section>

        <section className="mt-12 hidden lg:block lg:mt-32 ml-8">
          <img src={postcardThree} alt="postcard" className="w-1/2" />
          <img src={postcardTwo} alt="postcard" className="w-1/2 ml-20 -mt-8" />
          <img src={postcard} alt="postcard" className="w-1/2 -mt-8 ml-12" />
        </section>
      </div>
    </div>
  );
};

export { Hero };
