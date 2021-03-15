import code from "../assets/code.png";
import { SectionWrapper } from "../layout/SectionWrapper";
import Navbar from "../templates/Navbar";

const CodeVerified = () => {
  return (
    <SectionWrapper>
      <Navbar />
      <div className="flex justify-center items-center">
        <img src={code} alt="code" className="w-1/2 lg:w-1/6 lg:mt-8" />
      </div>
    </SectionWrapper>
  );
};

export { CodeVerified };
