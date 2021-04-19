import NavbarThree from "../templates/NavbarThree";
import secure from "../assets/secure.svg";
import support from "../assets/support.svg";
import wifi from "../assets/wifi.svg";
import { Aside } from "../molecules";
import { Footer } from "../organisms";

const DataSecurity = () => {
  return (
    <div>
      <NavbarThree
        text="Protecting your data and your privacy."
        buttonText="Download PDF"
        path="/"
        className="lg:m-auto w-7/12"
      />

      <section className="m-auto w-10/12 mt-20">
        <div className="flex">
          <section className="slim-border rounded-r-none rounded-l-md p-8">
            <div>
              <img src={secure} alt="secure" className="w-2/12" />
            </div>
            <p className="font-verybold text-lightBlack text-xs font-bold my-4">
              Keeping Your Data Secure
            </p>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
              nisi, cursus hendrerit elementum accumsan, commodo et erat
            </p>
            <p className="text-xs text-primary underline pt-8 font-verybold font-bold">
              Read more
            </p>
          </section>

          <section className="slim-border lg:border-r-0 lg:border-l-0 p-8">
            <div>
              <img src={wifi} alt="secure" className="w-2/12" />
            </div>
            <p className="font-verybold text-lightBlack text-xs font-bold my-4">
              Protecting Your Privacy
            </p>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
              nisi, cursus hendrerit elementum accumsan, commodo et erat
            </p>
            <p className="text-xs text-primary underline pt-8 font-verybold font-bold">
              Read more
            </p>
          </section>

          <section className="slim-border rounded-l-none rounded-r-md p-8">
            <div>
              <img src={support} alt="secure" className="w-2/12" />
            </div>
            <p className="font-verybold text-lightBlack text-xs font-bold my-4">
              Supporting Compliance Needs
            </p>
            <p className="text-sm leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
              nisi, cursus hendrerit elementum accumsan, commodo et erat
            </p>
            <p className="text-xs text-primary underline pt-8 font-verybold font-bold">
              Read more
            </p>
          </section>
        </div>
      </section>

      <div className="bg-gray">
        <section className="m-auto w-7/12 mt-12">
          <img src={secure} alt="secure" className="pt-12 mb-12" />
          <Aside title="Keeping your Data Secure" />
          <p className="text-sm leading-relaxed text-lightBlack my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
            nisi, cursus hendrerit elementum accumsan, commodo et erat.
            Vestibulum ut urna sit amet sapien fermentum tempus. Nullam
            facilisis pellentesque risus id vehicula. Integer accumsan, ante vel
            viverra elementum, lectus dui mattis velit, ut commodo est est eget
            nulla. Cras eu tincidunt sem. Sed aliquet odio nec finibus
            consequat. Sed tempus elit in scelerisque molestie. Mauris quis enim
            ut lectus euismod malesuada.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack my-4 pb-12">
            Nulla facilisi. Integer commodo dui sed nibh vulputate suscipit.
            Maecenas vulputate diam dolor, a laoreet elit condimentum non. Ut
            volutpat efficitur massa et bibendum. Suspendisse potenti. Integer
            odio elit, mollis id massa eu, lobortis tincidunt felis. Phasellus
            ac purus id massa tincidunt tincidunt. Pellentesque bibendum blandit
            dolor, non tincidunt ipsum porta eu. Phasellus vitae odio pretium,
            hendrerit felis vitae, eleifend felis. Nullam ullamcorper, risus
            eget condimentum hendrerit, mi nisl congue sapien, sit amet mollis
            justo ante in nibh. Cras quis tortor ac ipsum ullamcorper laoreet.
            Nunc id arcu nec leo fringilla dictum a sit amet quam. Fusce
            maximus, dolor eu lacinia iaculis, magna nulla placerat ligula,
            vitae ultricies odio neque quis dui. Praesent blandit dui mi, vel
            sodales leo molestie sagittis. Suspendisse a nisl quis est porta
            lacinia id vehicula ante. Nunc erat urna, fringilla id tempor vel,
            malesuada vel lacus.
          </p>
        </section>
      </div>

      <section className="m-auto w-7/12 mt-12 relative">
        <img src={wifi} alt="secure" className="pt-12 mb-12" />
        <Aside title="Protecting Your Privacy" />
        <p className="text-sm leading-relaxed text-lightBlack my-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
          nisi, cursus hendrerit elementum accumsan, commodo et erat. Vestibulum
          ut urna sit amet sapien fermentum tempus. Nullam facilisis
          pellentesque risus id vehicula. Integer accumsan, ante vel viverra
          elementum, lectus dui mattis velit, ut commodo est est eget nulla.
          Cras eu tincidunt sem. Sed aliquet odio nec finibus consequat. Sed
          tempus elit in scelerisque molestie. Mauris quis enim ut lectus
          euismod malesuada.
        </p>
        <p className="text-sm leading-relaxed text-lightBlack my-4 pb-12">
          Nulla facilisi. Integer commodo dui sed nibh vulputate suscipit.
          Maecenas vulputate diam dolor, a laoreet elit condimentum non. Ut
          volutpat efficitur massa et bibendum. Suspendisse potenti. Integer
          odio elit, mollis id massa eu, lobortis tincidunt felis. Phasellus ac
          purus id massa tincidunt tincidunt. Pellentesque bibendum blandit
          dolor, non tincidunt ipsum porta eu. Phasellus vitae odio pretium,
          hendrerit felis vitae, eleifend felis. Nullam ullamcorper, risus eget
          condimentum hendrerit, mi nisl congue sapien, sit amet mollis justo
          ante in nibh. Cras quis tortor ac ipsum ullamcorper laoreet. Nunc id
          arcu nec leo fringilla dictum a sit amet quam. Fusce maximus, dolor eu
          lacinia iaculis, magna nulla placerat ligula, vitae ultricies odio
          neque quis dui. Praesent blandit dui mi, vel sodales leo molestie
          sagittis. Suspendisse a nisl quis est porta lacinia id vehicula ante.
          Nunc erat urna, fringilla id tempor vel, malesuada vel lacus.
        </p>
      </section>

      <div className="bg-gray">
        <section className="m-auto w-7/12 mt-12">
          <img src={support} alt="secure" className="pt-12 mb-12" />
          <Aside title="Supporting Compliance Needs" />
          <p className="text-sm leading-relaxed text-lightBlack my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec est
            nisi, cursus hendrerit elementum accumsan, commodo et erat.
            Vestibulum ut urna sit amet sapien fermentum tempus. Nullam
            facilisis pellentesque risus id vehicula. Integer accumsan, ante vel
            viverra elementum, lectus dui mattis velit, ut commodo est est eget
            nulla. Cras eu tincidunt sem. Sed aliquet odio nec finibus
            consequat. Sed tempus elit in scelerisque molestie. Mauris quis enim
            ut lectus euismod malesuada.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack my-4 pb-12">
            Nulla facilisi. Integer commodo dui sed nibh vulputate suscipit.
            Maecenas vulputate diam dolor, a laoreet elit condimentum non. Ut
            volutpat efficitur massa et bibendum. Suspendisse potenti. Integer
            odio elit, mollis id massa eu, lobortis tincidunt felis. Phasellus
            ac purus id massa tincidunt tincidunt. Pellentesque bibendum blandit
            dolor, non tincidunt ipsum porta eu. Phasellus vitae odio pretium,
            hendrerit felis vitae, eleifend felis. Nullam ullamcorper, risus
            eget condimentum hendrerit, mi nisl congue sapien, sit amet mollis
            justo ante in nibh. Cras quis tortor ac ipsum ullamcorper laoreet.
            Nunc id arcu nec leo fringilla dictum a sit amet quam. Fusce
            maximus, dolor eu lacinia iaculis, magna nulla placerat ligula,
            vitae ultricies odio neque quis dui. Praesent blandit dui mi, vel
            sodales leo molestie sagittis. Suspendisse a nisl quis est porta
            lacinia id vehicula ante. Nunc erat urna, fringilla id tempor vel,
            malesuada vel lacus.
          </p>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export { DataSecurity };
