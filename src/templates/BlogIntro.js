import { Aside } from "../molecules";
import blog from "../assets/blog.png";
import blogTwo from "../assets/blogTwo.png";
import { Link } from "react-router-dom";

const BlogIntro = () => {
  return (
    <section className="mt-8 lg:grid lg:grid-cols-12">
      <div className="col-start-2 col-end-3">
        <Aside title="From Our Blog" className="lg:w-48 mt-4" />
      </div>

      <section className="mb-12 col-start-5 col-end-13">
        <div className="relative">
          <div className="absolute top-2 lg:top-4 lg:left-4 p-4 ml-4 mt-2 lg:mt-4 bg-white rounded-md h-32 lg:h-52 w-40">
            <p className="text-lightBlack text-sm lg:text-base font-verybold font-bold mb-0 lg:mb-12">
              Workwise raises $100m Series A funding from Salesforce.
            </p>
            <Link
              to="/blogarticle"
              className="text-primary underline text-xs lg:text-base font-verybold font-bold"
            >
              Read full article
            </Link>
          </div>
          <img
            src={blog}
            alt="blog"
            className="rounded-sm my-4 mb-12 w-full lg:w-full"
          />
        </div>

        <div className="relative">
          <div className="absolute top-2 lg:top-4 lg:left-4 p-4 ml-4 mt-2 lg:mt-4 bg-white rounded-md h-32 lg:h-52 w-40">
            <p className="text-lightBlack text-sm lg:text-base font-verybold font-bold mb-0 lg:mb-12">
              Hermann Powe joins Workwise as new Head of Design
            </p>
            <Link
              to="/blog"
              className="text-primary underline text-sm lg:text-base font-verybold font-bold"
            >
              Read full article
            </Link>
          </div>
          <img src={blogTwo} alt="blogTwo" className="rounded-sm lg:w-full" />
        </div>
      </section>
    </section>
  );
};

export default BlogIntro;
