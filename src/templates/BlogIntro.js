import blog from "../assets/blog.png";
import blogTwo from "../assets/blogTwo.png";
import { Link } from "react-router-dom";

const BlogIntro = () => {
  return (
    <section className="mt-8">
      <div className="mt-8 mb-16">
        <p className="text-primary text-3xl text-center font-bold mt-4">
          From Our Blog
        </p>
      </div>

      <section className="mb-12 flex justify-between">
        <div className="relative mr-10">
          <div className="absolute top-2 lg:top-4 lg:left-4 p-4 ml-4 mt-2 lg:mt-4 bg-white rounded-md h-32 lg:h-36 w-40">
            <p className="text-lightBlack text-sm lg:text-sm font-verybold font-medium mb-0 lg:mb-2">
              Workwise raises $100m Series A funding from Salesforce.
            </p>
            <Link
              to="/blogarticle"
              className="text-primary underline text-xs lg:text-sm font-verybold font-bold"
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

        <div className="relative mr-10">
          <div className="absolute top-2 lg:top-4 lg:left-4 p-4 ml-4 mt-2 lg:mt-4 bg-white rounded-md h-32 lg:h-36 w-40">
            <p className="text-lightBlack text-sm lg:text-sm font-verybold font-medium mb-0 lg:mb-2">
              Hermann Powe joins Workwise as new Head of Design
            </p>
            <Link
              to="/blog"
              className="text-primary underline text-xs lg:text-sm font-verybold font-bold"
            >
              Read full article
            </Link>
          </div>
          <img
            src={blogTwo}
            alt="blogTwo"
            className="rounded-sm my-4 lg:w-full"
          />
        </div>

        <div className="relative">
          <div className="absolute top-2 lg:top-4 lg:left-4 p-4 ml-4 mt-2 lg:mt-4 bg-white rounded-md h-32 lg:h-36 w-40">
            <p className="text-lightBlack text-sm lg:text-sm font-verybold font-medium mb-0 lg:mb-2">
              Workwise raises $100m Series A funding from Salesforce.
            </p>
            <Link
              to="/blogarticle"
              className="text-primary underline text-xs lg:text-sm font-verybold font-bold"
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
      </section>
    </section>
  );
};

export default BlogIntro;
