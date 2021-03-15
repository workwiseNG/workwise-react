import {
  Hero,
  SectionOne,
  SectionThree,
  SectionTwo,
  SectionFour,
  Footer,
} from "../organisms";
import { SectionWrapper } from "../layout/SectionWrapper";

const Home = () => {
  return (
    <div>
      <SectionWrapper className="overflow-hidden">
        <Hero />
        <SectionOne />
        <SectionTwo />
      </SectionWrapper>
      <SectionThree />
      <SectionFour />
      <Footer />
    </div>
  );
};

export { Home };
