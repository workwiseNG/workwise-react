import { Link } from "react-router-dom";
import { Aside } from "../molecules";
import { Footer } from "../organisms";
import NavbarTwo from "../templates/NavbarTwo";

const PrivacyPolicy = () => {
  return (
    <div>
      <NavbarTwo text="Privacy Policy" />
      <section className="m-auto w-10/12 lg:w-8/12 mt-20 lg:mt-40">
        <p className="text-sm leading-relaxed text-lightBlack my-4">
          Welcome to the web site (the “Site”) of Workwise, Inc. (“Workwise”,
          “we”, “us” and/or “our”). This Site is operated by Workwise and has
          been created to provide information about Workwise and the services we
          provide through the Site, through any mobile applications, and related
          services (collectively, such services, including any new features and
          applications, and the Site, are the “Services”) to our Site visitors
          (“you”, “your”).
        </p>
        <p className="text-sm leading-relaxed text-lightBlack mt-4 mb-12">
          This Privacy Policy describes how Workwise, Inc. collects, uses and
          discloses information, and what choices you have with respect to that
          information.
        </p>
      </section>
      <div className="bg-gray py-16">
        <section className="m-auto w-10/12 lg:w-8/12">
          <Aside title="Information We Collect" />

          <p className="text-sm leading-relaxed text-lightBlack mt-4">
            When you interact with us through the Services, we may collect
            Personal Data and other information from you, as further described
            below:
          </p>
          <p className="text-sm leading-relaxed text-lightBlack mt-6 underline font-bold">
            Personal Data That You Provide
          </p>
          <p className="text-sm leading-relaxed text-lightBlack">
            We collect Personal Data from you when you voluntarily provide such
            information, such as when you contact us with inquiries or register
            yourself or your company online for access to the Services. Wherever
            Workwise collects Personal Data, we make an effort to provide a link
            to this Privacy Policy. By voluntarily providing us with Personal
            Data, you are consenting to our use of it in accordance with this
            Privacy Policy. If you provide us Personal Data, you acknowledge and
            agree that such Personal Data may be transferred from your current
            location to the offices and servers of Workwise and the authorized
            third parties referred to herein located in the Nigeria.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack mt-6 underline font-bold">
            Non-Identifiable Data
          </p>
          <p className="text-sm leading-relaxed text-lightBlack">
            When you interact with Workwise through the Services, we receive and
            store certain personally non-identifiable information. Such
            information, which is collected passively using various
            technologies, cannot presently be used to specifically identify you.
            Workwise may store such information itself or such information may
            be included in databases owned and maintained by Workwise
            affiliates, agents or service providers. We may use such information
            and pool it with other information to track, for example, the total
            number of users of our Services, the number of visitors to each page
            of our Site, and the domain names of our visitors' Internet service
            providers. It is important to note that no Personal Data is
            available or used in this process.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack mt-4">
            In operating the Services, we may use a technology called "cookies."
            A cookie is a piece of information that our computers give to your
            browser when you access the Site. Our cookies help provide
            additional functionality to the Services and help us analyze usage
            of the Services more accurately. In all cases in which we use
            cookies, we will not collect Personal Data except with your
            permission. On most web browsers, you will find a “help” section on
            the toolbar. Please refer to this section for information on how to
            receive notification when you are receiving a new cookie and how to
            turn cookies off. We recommend that you leave cookies turned on
            because they allow you to take advantage of some of the special
            features of the Services.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack mt-6 underline font-bold">
            Aggregated Personal Data
          </p>
          <p className="text-sm leading-relaxed text-lightBlack">
            In an ongoing effort to better understand and serve our users,
            Workwise often conducts research on user demographics, interests
            behavior, and the like based on the Personal Data and other
            information provided to us. This research may be compiled and
            analyzed on an aggregate basis, and Workwise may share this
            aggregate data with its affiliates, agents and business partners.
            This aggregate information does not identify you personally.
            Workwise may also disclose aggregated user statistics to current and
            prospective business partners, and to other third parties for other
            lawful purposes.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack mt-6 underline font-bold">
            Location Information
          </p>
          <p className="text-sm leading-relaxed text-lightBlack">
            Our Service may collect and use your location information (for
            example, by using the Location Services on your mobile device) to
            provide certain functionality of our Service, including facilitating
            Visitor registration for Business Customers. Your location
            information is not made available to other users without your
            express permission. We may also use your location information in an
            aggregate way, as described above in the “Aggregated Personal Data”
            section.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack mt-6 underline font-bold">
            Google Analytics and Similar Technologies
          </p>
          <p className="text-sm leading-relaxed text-lightBlack">
            We may allow third party service providers to use cookies or similar
            technologies to collect information about your browsing activities
            over time and across different websites following your use of the
            Services. For example, we currently use Google Analytics, a web
            analytics service provided by Google, Inc. (“Google”). Google
            Analytics uses cookies to help us analyze how users use the Site and
            enhance your experience when you use the Service. For more
            information on how Google uses this data, go to
            <Link
              to="https://google.com/policies/privacy/partners/"
              className="text-primary ml-2"
            >
              https://google.com/policies/privacy/partners/.
            </Link>
          </p>
        </section>
      </div>
      <section className="m-auto w-10/12 lg:w-8/12 mt-16">
        <Aside title="Our Use of Personal Data and Other Information" />
        <p className="text-sm leading-relaxed text-lightBlack mt-6">
          Workwise uses the Personal Data you provide in a manner that is
          consistent with this Privacy Policy. If you provide Personal Data for
          a certain reason, we may use the Personal Data in connection with the
          reason for which it was provided. For instance, if you contact us by
          email, we will use the Personal Data you provide to answer your
          question or resolve your problem. Also, if you provide Personal Data
          in order to obtain access to the Services, we will use your Personal
          Data to provide you with such access and to monitor your use of such
          Services. Workwise and its subsidiaries and affiliates (the “Related
          Companies”) may also use your Personal Data and other personally
          non-identifiable information collected to help us improve the content
          and functionality of the Site and Services, to better understand our
          users and to improve the Site and Services. Workwise and its
          affiliates may use this information to contact you in the future to
          tell you about services we believe will be of interest to you. If we
          do so, each marketing communication we send you will contain
          instructions permitting you to "opt-out" of receiving future marketing
          communications. In addition, if at any time you wish not to receive
          any future marketing communications or you wish to have your name
          deleted from our mailing lists, please contact us as indicated below.
        </p>
        <p className="text-sm leading-relaxed text-lightBlack mt-6">
          As described above, Workwise provides Visitor registration services to
          its Business Customers. In connection with those Services, our
          Business Customers may electronically submit to us data or information
          they possess about their Visitors (“Business Customer Data”) for
          hosting and processing purposes in connection with the Services.
          Workwise only uses Business Customer Data per the terms of our
          relevant agreement with our Business Customers, or as may be required
          by law.
        </p>
        <p className="text-sm leading-relaxed text-lightBlack mt-6">
          Visitors should note that by using the Services, you may have the
          option to grant access or otherwise share your Personal Data with a
          Business Customer in an automated manner. A Business Customer’s use
          and disclosure of your Personal Data which you have made available
          through the Services is governed by the terms of such Business
          Customer’s privacy policy or other agreements which you may in place
          with such Business Customer.
        </p>
        <p className="text-sm leading-relaxed text-lightBlack mt-6 mb-16">
          The Services may permit a Business Customer (or its authorized agents)
          to connect with a Visitor through the Services, including via SMS or
          email or other methods of communication. Note that by communicating
          with a Visitor, an agent of a Business Customer may be sharing its
          Personal Data, including its name and email address, with such
          Visitor. This Privacy Policy does not govern the use of Personal Data
          by a Visitor.
        </p>
      </section>

      <div className="bg-gray mt-16 mb-32">
        <section className="m-auto w-10/12 lg:w-8/12 py-16">
          <Aside title="Contact Information" />
          <p className="text-sm leading-relaxed text-lightBlack mt-6">
            This is simply a demo privacy page. Ensure you fill in the content
            as needed.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack mt-6">
            If you have any questions or comments about our Privacy Policy as
            outlined above, you can contact us at <br /> hi@workwise.com.
          </p>
          <p className="text-sm leading-relaxed text-lightBlack mt-6">
            Workwise NG, <br /> 34, Herbert Maucaluy Drive, <br /> Lekki Phase
            1, Lagos, <br />
            Nigeria.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export { PrivacyPolicy };
