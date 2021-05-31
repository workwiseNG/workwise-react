import { SectionWrapper } from "../layout/SectionWrapper";
import BlogIntro from "../templates/BlogIntro";
import { BigText } from "../atoms";

const SectionFour = () => {
  return (
    <div className="mt-24 lg:mt-0">
      <BigText
        text="Powering Workplace Experiences!"
        buttonText="Find out how"
      />
      <SectionWrapper>
        <div className="mt-16 md:mt-0">
          <BlogIntro />
        </div>
      </SectionWrapper>
    </div>
  );
};

export { SectionFour };
