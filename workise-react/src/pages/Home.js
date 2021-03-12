import { Hero, SectionOne, SectionTwo } from "../organisms";
import { SectionWrapper } from "../layout/SectionWrapper";

const Home = () => {
  return (
    <SectionWrapper>
      <Hero />
      <SectionOne />
      <SectionTwo />
    </SectionWrapper>
  );
};

export default Home;
