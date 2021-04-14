import ipad from "../assets/ipad.png";
import tablet from "../assets/tablet.png";
import hardware from "../assets/hardware.png";
import windfall from "../assets/windfall.png";
import printer from "../assets/printer.png";
import { BigText } from "../atoms";
import { Footer } from "../organisms";
import { HardwareImage } from "../molecules";
import NavbarThree from "../templates/NavbarThree";

const Hardware = () => {
  return (
    <div>
      <NavbarThree
        text={
          <p>
            Everything you need to get started <br /> with Workwise.
          </p>
        }
        buttonText="Try for free"
        path="/tryforfree"
      />
      <section className="m-auto w-10/12 mt-40">
        <img src={hardware} alt="hardware" />
      </section>

      <div className="lg:flex justify-between m-auto w-9/12 mt-40 lg:mb-24">
        <section className="mt-12 w-1/2">
          <HardwareImage image={ipad} title="IPad" className="mb-12" />
          <HardwareImage
            image={tablet}
            title="Android Tablet"
            className="mb-12"
          />
        </section>

        <section className="mt-12 w-1/2">
          <HardwareImage image={windfall} title="Windfall Stand" />
          <HardwareImage
            image={printer}
            title="Brother QL-820NWB Badge Printer"
            className="mt-12"
          />
        </section>
      </div>

      <BigText
        text={
          <p>
            Increase employee engagement <br /> through the roof
          </p>
        }
        buttonText="Get Started"
      />
      <Footer />
    </div>
  );
};

export { Hardware };
