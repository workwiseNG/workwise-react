import { SectionWrapper } from "../layout/SectionWrapper";
import Navbar from "../templates/Navbar";

const AboutUs = () => {
  return (
    <section>
      <div className="bg-primary">
        <SectionWrapper>
          <Navbar />
        </SectionWrapper>
      </div>
    </section>
  );
};

export { AboutUs };
