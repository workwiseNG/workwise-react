import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
// import Input from "../templates/Input";
// import Select from "../templates/Select";
import Navbar from "../templates/Navbar";
import eyeOpen from "../assets/eyeOpen.svg";
import eyeClosed from "../assets/eyeClosed.svg";

const TryForFree = () => {
  const schema = yup.object().shape({
    company_email: yup
      .string()
      .email("Invalid email")
      .required("Email is required"),
    first_name: yup.string().required("First name is required"),
    last_name: yup.string().required("Last name is required"),
    password: yup
      .string()
      .required("No password provided.")
      .min(8, "Password is too short - should be 8 chars minimum."),
    // company_name: yup.string().required("Comapny name is required"),
    // company_name: yup.string().required("Company name is required"),
    // company_address: yup.string().required("Company address is required"),
    // company_size: yup
    //   .string()
    //   .oneOf([
    //     "1 - 40 employees",
    //     "41 - 80 employees",
    //     "81 - 120 employees",
    //     "121 - 160 employees",
    //   ])
    //   .required("You must select at least one option"),
    // company_url: yup.string().required("Company url is required"),
  });
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  console.log(errors);

  const onSubmit = (data, e) => console.log(data, e);
  const onError = (errors, e) => console.log(errors, e);

  const [formStep, setFormStep] = useState(0);
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisibility = () => {
    setPasswordShown(passwordShown ? false : true);
  };
  const nextFormStep = () => {
    setFormStep((cur) => cur + 1);
    console.log("good morning");
  };

  const renderButton = () => {
    if (formStep > 1) {
      return undefined;
    } else if (formStep === 1) {
      return (
        <div className="flex">
          <button
            onClick={backFormStep}
            className="bg-white text-primary border border-primary text-xs lg:text-sm my-4 font-bold py-4 px-8 lg:px-16 mr-4 rounded-md"
          >
            Go back
          </button>
          <button
            type="submit"
            className="bg-primary text-white text-xs lg:text-sm my-4 font-bold py-4 px-6 lg:px-12 rounded-md"
          >
            Create account
          </button>
        </div>
      );
    } else {
      return (
        <div className="float-right">
          {console.log(errors, isValid)}
          {/* <button
            disabled={!isValid}
            type="button"
            onClick={nextFormStep}
            className="bg-primary du  disabled:cursor-not-allowed text-white text-sm font-medium my-4 py-4 px-20 rounded-md"
          >
            Next
          </button> */}
          <button
            disabled={!isValid}
            onClick={nextFormStep}
            className="bg-primary"
            type="button"
          >
            Next
          </button>
        </div>
      );
    }
  };
  const backFormStep = () => {
    setFormStep(formStep - 1);
  };
  return (
    <div>
      <SectionWrapper>
        <div>
          <Navbar />
        </div>
        <form onSubmit={handleSubmit(onSubmit, onError)}>
          {formStep >= 0 && (
            <div className={formStep === 0 ? "block" : "hidden"}>
              <div className="lg:mt-12 lg:grid grid-cols-12 lg:m-auto lg:w-10/12 mb-24">
                <section className="col-start-1 col-end-5 lg:ml-4 mt-12 lg:mt-0">
                  <LogInIntro
                    title={
                      <p>
                        Step 01/02: <br className="mt-8" />
                        Create Your Free Account
                      </p>
                    }
                    text={
                      <div>
                        <p>
                          Password must be at least 8 characters and contain at
                          least one capital letter, one lower case letter and
                          one number.
                        </p>
                        <p className="my-4 lg:mt-4">
                          By clicking “Next” you agree to our <br />
                          <Link className="text-primary">
                            Terms of Service, Privacy Policy
                          </Link>
                        </p>
                      </div>
                    }
                    className="max-w-xs"
                  />
                </section>

                <section className="slim-border col-start-7 col-end-13 rounded-md mb-24 px-6 lg:px-8 pb-24 pt-4 lg:py-4">
                  <div>
                    <div
                      className={`shadow-menu input-box border border-primary `}
                    >
                      <label
                        className="text-xs text-primary label-text absolute"
                        style={{ fontFamily: "Bw Nista Geometric DEMO" }}
                      >
                        Your company email
                      </label>
                      <input
                        className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 input-font`}
                        type="text"
                        id="company_email"
                        name="company_email"
                        placeholder="osa@mudia.ment"
                        {...register("company_email")}
                      />
                    </div>
                    {errors.company_email && (
                      <p className="text-red-500 text-sm">
                        {errors.company_email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <div
                      className={`shadow-menu input-box border border-primary `}
                    >
                      <label
                        className="text-xs text-primary label-text absolute"
                        style={{ fontFamily: "Bw Nista Geometric DEMO" }}
                      >
                        First name
                      </label>
                      <input
                        className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 input-font`}
                        type="text"
                        id="first_name"
                        name="first_name"
                        placeholder="osamudiamen"
                        {...register("first_name")}
                      />
                    </div>
                    {errors.first_name && (
                      <p className="text-red-500 text-sm">
                        {errors.first_name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <div
                      className={`shadow-menu input-box border border-primary `}
                    >
                      <label
                        className="text-xs text-primary label-text absolute"
                        style={{ fontFamily: "Bw Nista Geometric DEMO" }}
                      >
                        Last name
                      </label>
                      <input
                        className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 input-font`}
                        type="text"
                        id="last_name"
                        name="last_name"
                        placeholder="imaseun"
                        {...register("last_name")}
                      />
                    </div>
                    {errors.last_name && (
                      <p className="text-red-500 text-sm">
                        {errors.last_name.message}
                      </p>
                    )}
                  </div>

                  <div className="w-full relative">
                    <i onClick={togglePasswordVisibility}>
                      <img
                        src={passwordShown ? eyeOpen : eyeClosed}
                        alt="visible"
                        className="w-6 absolute visibility mt-4"
                      />
                    </i>
                    <div>
                      <div
                        className={`shadow-menu input-box border border-primary `}
                      >
                        <label
                          className="text-xs text-primary label-text absolute"
                          style={{ fontFamily: "Bw Nista Geometric DEMO" }}
                        >
                          Your preferred password
                        </label>
                        <input
                          className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 input-font`}
                          type="text"
                          id="password"
                          name="password"
                          type={passwordShown ? "text" : "password"}
                          {...register("password")}
                        />
                      </div>
                      {errors.password && (
                        <p className="text-red-500 text-sm">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>
                </section>
              </div>
            </div>
          )}
          {formStep >= 1 && (
            <div className={formStep === 1 ? "block" : "hidden"}>
              <div className="lg:mt-12 lg:grid grid-cols-12 lg:m-auto lg:w-10/12">
                <section className="col-start-1 col-end-6 lg:ml-4 mt-12 lg:mt-0">
                  <LogInIntro
                    title={
                      <p>
                        Step 02/02: <br className="mt-8" />
                        Tell us a bit about your company
                      </p>
                    }
                    bgColor="#0A459F"
                  />
                </section>

                <section className="slim-border rounded-md col-start-7 col-end-13 py-4 px-6 lg:px-8 mb-24">
                  <div>
                    <div
                      className={`shadow-menu input-box border border-primary `}
                    >
                      <label
                        className="text-xs text-primary label-text absolute"
                        style={{ fontFamily: "Bw Nista Geometric DEMO" }}
                      >
                        Your company name
                      </label>
                      <input
                        className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 input-font`}
                        type="text"
                        id="company_name"
                        name="company_name"
                        placeholder="osa@mudia.ment"
                        {...register("company_name")}
                      />
                    </div>
                    {errors.company_name && (
                      <p className="text-red-500 text-sm">
                        {errors.company_name.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <div
                      className={`shadow-menu input-box border border-primary `}
                    >
                      <label
                        className="text-xs text-primary label-text absolute"
                        style={{ fontFamily: "Bw Nista Geometric DEMO" }}
                      >
                        Company address
                      </label>
                      <input
                        className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 input-font`}
                        type="text"
                        id="company_address"
                        name="company_address"
                        placeholder="Osamudiamen"
                        {...register("company_address")}
                      />
                    </div>
                    {errors.company_address && (
                      <p className="text-red-500 text-sm">
                        {errors.company_address.message}
                      </p>
                    )}
                  </div>

                  <div className="mt-8 border border-primary rounded-lg overflow-hidden shadow-lg">
                    <p className="text- text-primary label-text absolute">
                      Company size
                    </p>
                    <select
                      {...register("company_size")}
                      id="company_size"
                      name="company_size"
                      className="py-4 px-4 appearance-none dropdown"
                    >
                      <option value="1 - 40 employees">1 - 40 employees</option>
                      <option value="41 - 80 employees">
                        41 - 80 employees
                      </option>
                      <option value="81 - 120 employees">
                        81 - 120 employees
                      </option>
                      <option value="121 - 160 employees">
                        121 - 160 employees
                      </option>
                    </select>
                    {errors.company_size && (
                      <p className="text-red-500 text-sm">
                        {errors.company_size.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <div
                      className={`shadow-menu input-box border border-primary `}
                    >
                      <label
                        className="text-xs text-primary label-text absolute"
                        style={{ fontFamily: "Bw Nista Geometric DEMO" }}
                      >
                        Company URL
                      </label>
                      <input
                        className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 input-font`}
                        type="text"
                        id="company_url"
                        name="company_url"
                        placeholder="companyname.workwise.ng"
                        {...register("company_url")}
                      />
                    </div>
                    {errors.company_url && (
                      <p className="text-red-500 text-sm">
                        {errors.company_url.message}
                      </p>
                    )}
                  </div>
                </section>
              </div>
            </div>
          )}
          <pre>{JSON.stringify(watch(), null, 2)}</pre>
          {renderButton()}
        </form>
      </SectionWrapper>
    </div>
  );
};

export { TryForFree };
