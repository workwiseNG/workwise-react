import { Aside } from "../molecules";
import founder from "../assets/founder.png";
import coo from "../assets/coo.png";
import cto from "../assets/cto.png";

const SectionThree = () => {
  return (
    <div className="bg-gray pt-12 pb-8 lg:mt-12 lg:flex lg:flex-row-reverse">
      <div>
        <Aside
          title="Meet Our Team"
          text="We’re a team of innovators with deep expertise in Human Resource, Product Design, Business Process and Tech, backed by some of the finest talents in the country."
          className="lg:mt-16 lg:max-w-xs"
        />
      </div>
      <section className="mt-8 lg:mr-40">
        <img src={founder} alt="founder" className="w-1/2 object-cover" />
        <img src={cto} alt="cto" className="w-1/2 object-cover mt-8 ml-20" />
        <img src={coo} alt="coo" className="w-1/2 object-cover mt-12" />
      </section>
    </div>
  );
};

export { SectionThree };
