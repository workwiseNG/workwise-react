// import { SectionWrapper } from "../layout/SectionWrapper";
import LearnCard from "../atoms/LearnCard";
import NavbarFour from "../templates/NavbarFour";
import { Footer } from "../organisms";

const Learn = () => {
  return (
    <div>
      <NavbarFour
        text="Help Center"
        textTwo="Get more information and how-tos about Workwise"
      />

      <section className="m-auto w-10/12 lg:w-8/12 mt-24">
        <p className=" text-primary text-xl font-bold">General FAQs</p>
        <LearnCard question="What is Workwise?" />
        <LearnCard question="What can I use Workwise for?" />
        <LearnCard question="Is Workwise free?" />
        <LearnCard question="What are the terms and conditions on Workwise?" />
      </section>

      <section className="m-auto w-10/12 lg:w-8/12 mt-10 mb-24">
        <p className=" text-primary text-xl font-bold">Workwise Mobile App</p>
        <LearnCard question="Lorem ipsum dolor amit" />
        <LearnCard question="Lorem ipsum dolor amit" />
        <LearnCard question="Lorem ipsum dolor amit" />
        <LearnCard question="Lorem ipsum dolor amit" />
      </section>

      <Footer />
    </div>
  );
};

export { Learn };
