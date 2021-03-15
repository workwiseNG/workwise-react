import ipad from "../assets/ipad.png";
import screenshot from "../assets/screenshot.png";
import tablet from "../assets/tablet.png";
import windfall from "../assets/windfall.png";
import printer from "../assets/printer.png";
import { HeaderTwo } from "../atoms";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Footer } from "../organisms";
import { HardwareImage } from "../molecules";

const Hardware = () => {
  return (
    <div>
      <SectionWrapper>
        <img
          src={screenshot}
          alt="screenshot"
          className="object-cover mt-12 lg:w-5/6"
        />

        <div className="lg:flex">
          <section className="mt-12">
            <HardwareImage image={ipad} title="Ipad" className="mb-12" />
            <HardwareImage image={windfall} title="Windfall Stand" />
          </section>

          <section className="mt-12">
            <HardwareImage
              image={tablet}
              title="Android Tablet"
              className="mb-12"
            />
            <HardwareImage
              image={printer}
              title="Brother QL-820NWB Badge Printer"
            />
          </section>
        </div>

        <section className="mt-8 bg-gray border border-primary rounded-lg p-2 text-center">
          <HeaderTwo
            text="Increase employee engagement through the roof!"
            className="lg:max-w-3xl lg:ml-40 lg:text-5xl"
          />
          <button class="bg-primary text-white font-bold text-xs py-2 px-4 mb-8 rounded mt-8">
            Find out how
          </button>
        </section>
      </SectionWrapper>
      <Footer />
    </div>
  );
};

export { Hardware };
