import { Link } from "react-router-dom";
import logo from "../assets/Group.png";
import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Input from "../templates/Input";
import Navbar from "../templates/Navbar";
import Select from "../templates/Select";

const RequestDemo = () => {
  return (
    <div>
      <SectionWrapper>
        <Navbar image={logo} />
      </SectionWrapper>
      <div className="lg:mt-12 lg:flex mb-24">
        <section className="lg:ml-24 lg:mr-64">
          <LogInIntro
            title="To schedule a demo,kindly fill our form"
            bgColor="#0A459F"
            className="max-w-xs"
          />
        </section>

        <section className="slim-border rounded-md m-auto w-5/12  px-8 py-2">
          <Input label="First name" placeholder="Osamudiamen" type="text" />
          <Input label="Last name" placeholder="Imaseun" type="text" />
          <Input
            label="Your company email"
            placeholder="osa@mudia.ment"
            type="email"
          />
          <Input label="Phone number" placeholder="08018564579" type="text" />
          <Select label="I'm interested with how Workwise can help with" />

          <div className="float-right">
            <Link to="/" className="text-right">
              <button class="bg-primary text-white text-sm font-bold py-4 px-12 my-8 rounded-md">
                Send
              </button>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export { RequestDemo };
