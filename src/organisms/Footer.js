import logo from "../assets/Group.png";
import playStore from "../assets/googlePlay.png";
import ios from "../assets/iosStore.png";
import { SmallText } from "../atoms";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <SectionWrapper>
      <div className="mt-20">
        <hr />

        <div className="lg:flex">
          <section className="lg:max-w-xs lg:mr-52">
            <img src={logo} alt="logo" className="mt-8" />
            <SmallText
              text="© 2020 Workwise NG. All rights reserved."
              className="my-4"
            />
            <SmallText
              text="“Workwise” are trademarks of Workwise NG, 12 Omorinsola Drive, Lekki Phase 1, Lagos, Nigeria"
              className="my-4"
            />
            <SmallText
              text="All text, graphics, audio files, code, downloadable material, and other works on this website are the copyrighted works of Workwise NG. All Rights Reserved."
              className="my-4"
            />
            <SmallText
              text="Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary."
              className="my-4"
            />
          </section>

          <div className="lg:mt-12">
            <div className="lg:flex">
              <section className="mt-8 mr-20">
                <p className="text-xs font-normal uppercase mb-2">Products</p>
                <ul>
                  <li>
                    <SmallText
                      text="Visitor Management"
                      className="font-bold my-2"
                    />
                  </li>
                  <li>
                    <SmallText
                      text="Meeting Rooms"
                      className="font-bold mb-2"
                    />
                  </li>
                  <img
                    src={playStore}
                    alt="playStore"
                    className="w-1/4 lg:w-1/2 mb-2 -ml-2 object-cover"
                  />
                  <img
                    src={ios}
                    alt="ios store"
                    className="w-1/4 lg:w-1/2 object-cover"
                  />
                </ul>
              </section>
              <section className="mt-8 mr-16">
                <p className="text-xs font-normal uppercase mb-2">Resources</p>
                <ul>
                  <li>
                    <SmallText text="Request Demo" className="font-bold mb-2" />
                  </li>
                  <li>
                    <SmallText text="Pricing" className="font-bold mb-2" />
                  </li>
                  <li>
                    <SmallText text="Support" className="font-bold mb-2" />
                  </li>
                  <li>
                    <SmallText text="Hardware" className="font-bold mb-2" />
                  </li>
                  <li>
                    <SmallText text="Learn" className="font-bold mb-2" />
                  </li>
                  <li>
                    <SmallText text="Support" className="font-bold mb-2" />
                  </li>
                </ul>
              </section>

              <section className="mt-8 mr-20">
                <p className="text-xs font-normal uppercase mb-2">Company</p>
                <ul>
                  <Link to="aboutus">
                    <li>
                      <SmallText text="About Us" className="font-bold mb-2" />
                    </li>
                  </Link>
                  <li>
                    <SmallText text="Contact US" className="font-bold mb-2" />
                  </li>
                  <li>
                    <SmallText text="Support" className="font-bold mb-2" />
                  </li>
                  <li>
                    <SmallText text="Careers" className="font-bold mb-2" />
                  </li>
                  <li>
                    <SmallText text="Blog" className="font-bold mb-2" />
                  </li>
                  <li>
                    <SmallText
                      text="Data Security"
                      className="font-bold mb-2"
                    />
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Footer };
