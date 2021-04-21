import blog from "../assets/blog.png";
import { Link } from "react-router-dom";

const Article = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-2 lg:top-4 lg:left-4 p-4 ml-4 mt-4 bg-white rounded-md h-32 lg:h-52 w-44">
          <p className="text-black font-extrabold text-sm lg:text-base mb-0 lg:mb-12">
            Workwise raises $100m Series A funding from Salesforce.
          </p>
          <Link
            to="/blogarticle"
            className="text-primary underline text-sm lg:text-base font-semibold"
          >
            Read full article
          </Link>
        </div>
        <img
          src={blog}
          alt="blog"
          className="rounded-sm my-4 mb-12 lg:w-full"
        />
      </div>
    </div>
  );
};

export default Article;
