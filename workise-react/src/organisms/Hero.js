import logo from "../assets/Group.png";
import { BiMenuAltRight } from "react-icons/bi";
import { HeaderOne, SmallText } from "../atoms";

const Hero = () => {
  return (
    <div>
      <div className="object-cover flex items-center justify-between">
        <img src={logo} alt="" />
        <BiMenuAltRight className="text-4xl" />
      </div>

      <section className="mt-16">
        <HeaderOne
          text="Building a better workplace for everyone."
          className="mb-4"
        />

        <SmallText
          text="We empower productivity and the overall well-being of employees, while fostering an inclusive workplace community."
          className="my-4"
        />

        <button class="bg-primary text-white text-xs py-2 px-4 rounded">
          Try for free
        </button>
      </section>

      {/* <section className="mt-8">
        <img src={postcardThree} alt="postcard" />
        <img src={postcardTwo} alt="postcard" />
        <img src={postcard} alt="postcard" />
      </section> */}
    </div>
  );
};

export { Hero };
