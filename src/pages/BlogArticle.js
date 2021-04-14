import { SectionWrapper } from "../layout/SectionWrapper";
import Navbar from "../templates/Navbar";
import blog from "../assets/blog.png";
import { Footer } from "../organisms";

const BlogArticle = () => {
  return (
    <div>
      <SectionWrapper>
        <Navbar />
      </SectionWrapper>

      <section className="m-auto w-9/12 mt-20">
        <p className="text-lightBlack font-bold font-verybold text-6xl leading-tight">
          Workwise raises $100m <br /> Series A funding from Salesforce.
        </p>
        <img src={blog} alt="blog" className="py-12" />

        <section>
          <p className="text-primary text-xl font-normal leading-relaxed mb-8">
            Donec eu fringilla lorem. Curabitur quis velit in magna tincidunt
            maximus. Nam tincidunt ante eget orci porta, ut elementum massa
            aliquam. Mauris mattis, velit ullamcorper malesuada pharetra, lacus
            diam dapibus neque, vel aliquam augue lorem id tortor.
          </p>
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
          <p className="text-sm leading-relaxed text-lightBlack my-4">
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
          <p className="text-sm leading-relaxed text-lightBlack my-4">
            Quisque malesuada blandit lacus, vitae finibus nulla malesuada ut.
            Fusce aliquam condimentum nisl vitae lobortis. Phasellus risus
            neque, sollicitudin in fermentum sit amet, elementum nec arcu. Duis
            eros metus, sodales ut odio nec, consectetur sodales sem. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            pulvinar nibh arcu, vitae consequat ex imperdiet eu. Vivamus eget
            nibh sodales, sodales nunc ut, elementum urna. Etiam nec sapien ac
            erat pharetra feugiat. Vivamus ornare, quam id tincidunt eleifend,
            nisi lacus tempor enim, eu euismod mi leo ac lectus. Proin eu tortor
            eu ante accumsan mollis. Ut mollis libero nec tellus efficitur
            dignissim.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack my-4">
            Vivamus lacinia, mi sed gravida sagittis, nunc nunc malesuada quam,
            at accumsan tortor sem ut tellus. Fusce accumsan felis metus, in
            gravida risus fringilla at. Integer nibh nulla, placerat a tellus
            at, fringilla dictum dui. Suspendisse ac risus dapibus, laoreet
            nulla sed, volutpat ante. Donec arcu nibh, viverra a euismod
            sodales, scelerisque sit amet erat. Maecenas odio nibh, congue non
            porta sed, ullamcorper a nunc. Suspendisse volutpat convallis mi
            vitae pharetra. In sed maximus tortor. Pellentesque habitant morbi
            tristique senectus et netus et malesuada fames ac turpis egestas.
            Phasellus imperdiet scelerisque magna, nec fringilla massa laoreet
            quis. Fusce sit amet consequat ex, nec tempus neque. Aliquam varius
            sagittis massa, eleifend fermentum ligula feugiat ut. Etiam ac lacus
            sed elit tempus sollicitudin at ut elit. Sed gravida tempor tortor.
            Integer pharetra non enim nec tristique.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack my-4">
            Nulla convallis hendrerit elit vitae tempor. Etiam aliquam sagittis
            massa, ut tempus risus convallis non. Cras rhoncus elit ac lectus
            iaculis, eget blandit eros vulputate. Pellentesque efficitur, nisi
            et vehicula mollis, leo dolor semper elit, sit amet malesuada ex
            orci consectetur orci. Nunc eget massa vitae ligula vestibulum
            lobortis ac sit amet mauris. Donec eu fringilla lorem. Curabitur
            quis velit in magna tincidunt maximus. Nam tincidunt ante eget orci
            porta, ut elementum massa aliquam. Mauris mattis, velit ullamcorper
            malesuada pharetra, lacus diam dapibus neque, vel aliquam augue
            lorem id tortor. Mauris sit amet nunc eu sem pharetra suscipit
            fringilla vitae felis. Sed eu metus ut velit commodo ultrices non eu
            eros. Mauris quis iaculis odio. Curabitur ut posuere velit. Praesent
            et lobortis quam. Cras tristique gravida tempus. Morbi tempus ligula
            a elit auctor, vel pellentesque nisi tempus.
          </p>
        </section>
      </section>
      <Footer />
    </div>
  );
};

export { BlogArticle };
