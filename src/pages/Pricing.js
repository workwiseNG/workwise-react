import { Aside } from "../molecules";
import NavbarThree from "../templates/NavbarThree";
import PriceCard from "../templates/PriceCard";
import Table from "../templates/Table";
import TableThree from "../templates/TableThree";
import TableTwo from "../templates/TableTwo";
import { HeaderTwo } from "../atoms";
import { Footer } from "../organisms";

const Pricing = () => {
  return (
    <div>
      <NavbarThree
        text={
          <p>
            Choose the products and plans <br /> that work for you.
          </p>
        }
        buttonText="Try for free"
        path="/tryforfree"
      />

      <div className="m-auto w-10/12 my-32 lg:flex justify-between">
        <PriceCard
          name="Basic"
          status="Free"
          rooms="up to 10 rooms"
          note="For offices just getting started with meeting room management."
          buttonText="Get Started"
          className="mt-14"
        />
        <PriceCard
          name="Basic"
          status="$18"
          rooms="up to 10 rooms"
          bill="billed annually"
          note="For companies of all sizes that want to make the most of their meeting room spaces."
          buttonText="Try for free"
        />
        <PriceCard
          name="Basic"
          status="$18"
          rooms="up to 10 rooms"
          bill="billed annually"
          note="For companies of all sizes that want to make the most of their meeting room spaces."
          buttonText="Try for free"
        />
      </div>

      <section className="m-auto w-10/12 my-32">
        <Aside title="Compare Plans" />
        <Table />
        <TableTwo />
        <TableThree />
      </section>

      <div>
        <section className="mt-8 bg-gray border border-primary rounded-lg p-4 lg:mb-32 text-center lg:mt-28 m-auto w-11/12">
          <HeaderTwo
            className=" lg:mt-12 lg:text-6xl font-verybold font-extrabold"
            text={
              <p>
                Not sure which plan is right <br /> for you?
              </p>
            }
          />
          <div className="flex justify-center items-center">
            <button class="bg-primary text-white text-xs font-bold py-4 px-10 rounded-md my-10 text-center mr-4">
              Give us a call
            </button>
            <button class="bg-white text-primary border border-primary text-xs font-bold py-4 px-10 rounded-md my-10 text-center">
              Send us an email
            </button>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export { Pricing };
