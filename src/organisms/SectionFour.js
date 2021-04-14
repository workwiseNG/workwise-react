// import organization from "../assets/organizations.png";
import { SectionWrapper } from "../layout/SectionWrapper";
import BlogIntro from "../templates/BlogIntro";
import { BigText } from "../atoms";

const SectionFour = () => {
  return (
    <div>
      <BigText
        text={
          <p>
            Increase employee engagement <br /> through the roof!
          </p>
        }
        buttonText="Find out how"
      />
      <SectionWrapper>
        <div className="mt-16 lg:ml-28">
          <div>
            {/* <img
            src={organization}
            alt="organization"
            className="object-cover lg:my-36"
          /> */}
          </div>

          <BlogIntro />
        </div>
      </SectionWrapper>
    </div>
  );
};

export { SectionFour };
