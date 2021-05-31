import blog from "../assets/blog.png";
import blogTwo from "../assets/blogTwo.png";
import { Link } from "react-router-dom";

const BlogIntro = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <section className="mt-8">
      <div className="mt-8 mb-16">
        <p className="text-primary text-3xl text-center font-bold mt-4">
          From Our Blog
        </p>
      </div>

      <section className="mb-12 flex justify-between">
        <div className="overflow-hidden shadow-lg mr-10">
          <img className="w-full" src={blog} alt="Mountain" />
          <div className="px-6 py-4">
            <p className="text-lightBlack text-base lg:text-lg font-verybold font-medium mb-0 lg:mb-10">
              Workwise raises $100m Series A funding from Salesforce.
            </p>
            <Link
              to="/blogarticle"
              onClick={scrollToTop}
              className="text-primary underline text-xs lg:text-sm font-verybold font-bold"
            >
              Read full article
            </Link>
          </div>
        </div>

        <div className="overflow-hidden shadow-lg mr-10">
          <img className="w-full" src={blogTwo} alt="Mountain" />
          <div className="px-6 py-4">
            <p className="text-lightBlack text-sm lg:text-lg font-verybold font-medium mb-0 lg:mb-10">
              Hermann Powe joins Workwise as new Head of Design
            </p>
            <Link
              to="/blogarticle"
              onClick={scrollToTop}
              className="text-primary underline text-xs lg:text-sm font-verybold font-bold"
            >
              Read full article
            </Link>
          </div>
        </div>

        <div className="overflow-hidden shadow-lg">
          <img className="w-full" src={blog} alt="Mountain" />
          <div className="px-6 py-4">
            <p className="text-lightBlack text-base lg:text-lg font-verybold font-medium mb-0 lg:mb-10">
              Workwise raises $100m Series A funding from Salesforce.
            </p>
            <Link
              to="/blogarticle"
              onClick={scrollToTop}
              className="text-primary underline text-xs lg:text-sm font-verybold mb-4 font-bold"
            >
              Read full article
            </Link>
          </div>
        </div>
      </section>
    </section>
  );
};

export default BlogIntro;
