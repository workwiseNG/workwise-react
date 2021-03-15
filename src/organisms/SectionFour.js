import organization from "../assets/organizations.png";
import { Aside } from "../molecules";
import blog from "../assets/blog.png";
import blogTwo from "../assets/blogTwo.png";
import { SectionWrapper } from "../layout/SectionWrapper";

const SectionFour = () => {
  return (
    <SectionWrapper>
      <div className="mt-16">
        <div>
          <img
            src={organization}
            alt="organization"
            className="object-cover lg:w-96"
          />
        </div>
        <section className="mt-8 lg:flex lg:justify-between">
          <div>
            <Aside title="Our Blog" className="lg:mr-72" />
          </div>
          <div>
            <img src={blog} alt="blog" className="rounded-sm my-4 lg:w-1/2" />
            <img src={blogTwo} alt="blogTwo" className="rounded-sm lg:w-1/2" />
          </div>
        </section>
      </div>
    </SectionWrapper>
  );
};

export { SectionFour };
