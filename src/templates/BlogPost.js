import wink from "../assets/wink.png";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <div>
      <div className="relative mb-8 lg:mb-0">
        <div className="absolute top-2 lg:top-4 lg:left-4 p-4 ml-4 mt-4 bg-white rounded-md h-36 lg:h-52 w-40">
          <p className="text-black font-extrabold text-sm lg:text-base mb-2 lg:mb-12">
            Hermann Powe joins Workwise as new Head of Design
          </p>
          <Link
            to="/blog"
            className="text-primary underline text-sm lg:text-base font-semibold"
          >
            Read full article
          </Link>
        </div>
        <img src={wink} alt="wink" className="rounded-sm lg:w-full" />
      </div>
    </div>
  );
};

export { BlogPost };
