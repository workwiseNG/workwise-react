import logo from "../assets/Group.png";
import playStore from "../assets/googlePlay.png";
import ios from "../assets/iosStore.png";
import { SmallText, SmallerText } from "../atoms";
import { SectionWrapper } from "../layout/SectionWrapper";
import { Link } from "react-router-dom";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import { Resources, Company } from "../data/Footer";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <SectionWrapper>
      <div className="mt-20 border-t border-lightBlack">
        <div className="lg:flex lg:mb-16 lg:justify-between">
          <section className="md:w-full lg:max-w-lg">
            <img
              src={logo}
              alt="logo"
              className="w-1/2 md:w-32 lg:w-1/5 mt-8 lg:mb-8"
            />
            <SmallText
              text="© 2020 Workwise NG. All rights reserved."
              className="my-4 text-xs"
            />
            <SmallText
              text="“Workwise” are trademarks of Workwise NG, 12 Omorinsola Drive, Lekki Phase 1, Lagos, Nigeria"
              className="my-4 leading-loose"
            />
            <SmallText
              text="All text, graphics, audio files, code, downloadable material, and other works on this website are the copyrighted works of Workwise NG. All Rights Reserved."
              className="my-4 leading-relaxed"
            />
            <SmallText
              text="Any unauthorized redistribution or reproduction of any copyrighted materials on this website is strictly prohibited. Other product and company names are trademarks of their respective owners. This website contains simulated images; actual appearance may vary."
              className="my-6 leading-relaxed"
            />
          </section>

          <div className="lg:mt-12">
            <div className="flex flex-col-reverse md:flex-row justify-between">
              <section className="mt-8">
                <p className="text-xs uppercase mb-4 font-verybold font-bold footer-text">
                  Products
                </p>
                <ul>
                  <Link to="visitor-management">
                    <li onClick={scrollToTop}>
                      <SmallerText
                        text="Visitor Management"
                        className="font-extrabold my-2 text-xs"
                      />
                    </li>
                  </Link>
                  <Link to="meeting-room">
                    <li onClick={scrollToTop}>
                      <SmallerText
                        text="Meeting Rooms"
                        className="font-bold mb-4"
                      />
                    </li>
                  </Link>
                  <img
                    src={playStore}
                    alt="playStore"
                    className="w-36 md:w-36 -ml-2 mb-2 lg:mt-8"
                  />
                  <img src={ios} alt="ios store" className="w-2/4 md:w-32" />
                </ul>
              </section>
              <div className="flex flex-row-reverse md:flex-row">
                <section className="mt-8">
                  <p className="text-xs uppercase mb-4 font-verybold font-bold footer-text">
                    Resources
                  </p>
                  {Resources.map((text, index) => (
                    <ul key={index} className="mt-4">
                      <Link to={text.link}>
                        <li onClick={scrollToTop}>
                          <SmallerText
                            text={text.name}
                            className="font-bold mb-4"
                          />
                        </li>
                      </Link>
                    </ul>
                  ))}
                </section>
                <section className="mt-8 mr-20">
                  <p className="uppercase mb-4 font-verybold font-bold footer-text">
                    Company
                  </p>
                  {Company.map((text, index) => (
                    <ul key={index} className="mt-4">
                      <Link to={text.link}>
                        <li onClick={scrollToTop}>
                          <SmallerText
                            text={text.name}
                            className="font-bold mb-4"
                          />
                        </li>
                      </Link>
                    </ul>
                  ))}
                </section>
              </div>
            </div>

            <section className="md:flex md:justify-between md:items-center mt-4">
              <Link
                to="/privacy-policy"
                className="font-verybold font-bold text-xs text-lightBlack leading-relaxed footerText mr-4"
                onClick={scrollToTop}
              >
                Privacy Policy
              </Link>
              <p className="hidden lg:block font-verybold font-black text-4xl lg:-mt-6 text-lightBlack leading-relaxed mr-4">
                .
              </p>
              <Link to="/termsofservice" onClick={scrollToTop}>
                <p className="font-verybold font-bold text-xs text-lightBlack leading-relaxed footerText mr-24 my-4 lg:my-0">
                  Terms of Service
                </p>
              </Link>
              <div className="flex mb-8 lg:mb-0 md:mt-6 lg:mt-0">
                <img src={facebook} alt="facebook" className="mr-2" />
                <img src={twitter} alt="twitter" className="mr-2" />
                <img src={linkedin} alt="linkedin" className="mr-2" />
                <img src={instagram} alt="instagram" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export { Footer };
