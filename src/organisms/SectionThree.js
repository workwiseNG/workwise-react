import { Aside } from "../molecules";
import ctoTwo from "../assets/ctoTwo.png";
import founderTwo from "../assets/founderTwo.png";
import { Link } from "react-router-dom";
import TeamImage from "../templates/TeamImage";

const SectionThree = () => {
  return (
    <div className="bg-gray pt-12 pb-8 lg:mt-12 lg:flex lg:flex-row-reverse lg:justify-between">
      <div className="lg:mr-28 lg:mt-16">
        <Aside
          title="Meet Our Team"
          text={
            <p>
              We’re a team of innovators with deep expertise in Human Resource,
              Product Design, Business Process and Tech, <br /> backed by some
              of the finest talents in the country.
            </p>
          }
          className="lg:mt-16 lg:max-w-md"
        />
        <Link to="/aboutus">
          <button class="bg-primary text-white text-xs font-bold py-4 px-12 rounded-md my-8 text-center">
            Learn More
          </button>
        </Link>
      </div>

      <section className="mt-8 lg:mt-4 lg:ml-44 mb-16">
        <TeamImage
          image={founderTwo}
          name="Niyi Adisa"
          position="Founder/CEO"
        />
        <TeamImage
          image={ctoTwo}
          name="Ilyas Farawe"
          position="Chief Technology Officer"
          className="mt-8 ml-20"
        />
        <TeamImage
          image={ctoTwo}
          name="Temitope Ozreks"
          position="Chief Operations Officer"
          className="mt-12"
        />
      </section>
    </div>
  );
};

export { SectionThree };
