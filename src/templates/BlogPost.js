import wink from "../assets/wink.png";
import { Link } from "react-router-dom";

const BlogPost = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-4 left-4 p-4 ml-4 mt-4 bg-white rounded-lg h-52 w-44">
          <p className="text-black font-extrabold mb-12">
            Hermann Powe joins Workwise as new Head of Design
          </p>
          <Link
            to="/blog"
            className="text-primary underline text-base font-semibold"
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
