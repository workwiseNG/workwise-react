import { SectionWrapper } from "../layout/SectionWrapper";
import Navbar from "../templates/Navbar";
import Input from "../templates/Input";
import { Footer } from "../organisms";
import TextArea from "../templates/TextArea";

const ContactUs = () => {
  return (
    <div>
      <SectionWrapper>
        <Navbar />
      </SectionWrapper>

      <section className="">
        <div className="my-10 lg:my-20 text-center">
          <p className="text-primary text-5xl font-thin font-semibold pb-2">
            Send us a message
          </p>
          <small>Get in touch with us</small>
        </div>

        <section className="m-auto w-10/12 md:w-8/12 lg:w-4/12">
          <Input label="Full name" placeholder="Osamudiamen" type="text" />
          <Input
            label="Email address"
            placeholder="osa@mudia.ment"
            type="email"
          />
          <Input label="Phone number" placeholder="08189647895" type="text" />
          <Input label="Company name" placeholder="Imaseun,Inc." type="text" />
          <TextArea label="Message" />
          <button class="bg-primary text-white text-sm my-2 mt-8 font-bold py-4 px-16 rounded-md w-full">
            Send message
          </button>
        </section>
      </section>

      <Footer />
    </div>
  );
};

export { ContactUs };
