import { SectionWrapper } from "../layout/SectionWrapper";
import Navbar from "../templates/Navbar";
import { BlogPost } from "../templates/BlogPost";
import Article from "../templates/Article";
import { Footer } from "../organisms";

const Blog = () => {
  return (
    <div>
      <SectionWrapper>
        <Navbar />
      </SectionWrapper>

      <section className="m-auto w-10/12 lg:w-9/12 mt-10 lg:mt-20">
        <Article />

        <section className="lg:grid grid-cols-8 gap-10 mb-8">
          <div className="col-start-1 col-end-5">
            <BlogPost />
          </div>
          <div className="col-start-5 col-end-9">
            <BlogPost />
          </div>
        </section>

        <section className="lg:grid grid-cols-8 gap-10 mb-8">
          <div className="col-start-1 col-end-5">
            <BlogPost />
          </div>
          <div className="col-start-5 col-end-9">
            <BlogPost />
          </div>
        </section>

        <section className="lg:grid grid-cols-8 gap-10 mb-8">
          <div className="col-start-1 col-end-5">
            <BlogPost />
          </div>
          <div className="col-start-5 col-end-9">
            <BlogPost />
          </div>
        </section>

        <Article />

        <section className="lg:grid grid-cols-8 gap-10 mb-8">
          <div className="col-start-1 col-end-5">
            <BlogPost />
          </div>
          <div className="col-start-5 col-end-9">
            <BlogPost />
          </div>
        </section>

        <section className="lg:grid grid-cols-8 gap-10 mb-28">
          <div className="col-start-1 col-end-5">
            <BlogPost />
          </div>
          <div className="col-start-5 col-end-9">
            <BlogPost />
          </div>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export { Blog };
