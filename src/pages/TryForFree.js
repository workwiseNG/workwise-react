import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { SectionWrapper } from "../layout/SectionWrapper";
import { LogInIntro } from "../molecules";
import Input from "../templates/Input";
import Select from "../templates/Select";
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
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
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
    setFormStep(formStep + 1);
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
          {formStep === 0 && (
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
                        least one capital letter, one lower case letter and one
                        number.
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
                {/* <Input
                  label="Your company email"
                  placeholder="osa@mudia.ment"
                  type="email"
                  id="company_email"
                  name="company_email"
                  {...register("company_email")}
                /> */}
                {/* <div className={`shadow-menu input-box border border-primary`}>
                  <p
                    className="text-xs text-primary label-text absolute"
                    style={{ fontFamily: "Bw Nista Geometric DEMO" }}
                  >
                    Your company email
                  </p>
                  <input
                    onChange={(e) => {
                      setError("company_email", {
                        type: "manual",
                        message: "Dont Forget Your Username Should Be Cool!",
                      });
                      onChange(e);
                    }}
                    {...rest}
                    type="text"
                    name="company_email"
                    id="company_email"
                    {...register("company_email", {
                      required: true,
                      // message: "Please type a username",
                    })}
                    placeholder="osa@mudia.ment"
                    className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 input-font `}
                  />
                  {errors.company_email && (
                    <p>{errors.company_email.message}</p>
                  )}
                </div> */}
                {/* <Input
                  label="First name"
                  placeholder="Osamudiamen"
                  type="text"
                />
                <Input label="Last name" placeholder="Imaseun" type="text" />
                <div className="w-full relative">
                  <i onClick={togglePasswordVisibility}>
                    <img
                      src={passwordShown ? eyeOpen : eyeClosed}
                      alt="visible"
                      className="w-6 absolute visibility mt-4"
                    />
                  </i>
                  <Input
                    label="Your preferred password"
                    placeholder="password"
                    type={passwordShown ? "text" : "password"}
                  />
                </div> */}
                <div className="float-right">
                  {/* <Link to="/yourcompany" className="text-right"> */}
                  {console.log(errors)}
                  <button
                    disabled={!isValid}
                    type="button"
                    onClick={nextFormStep}
                    className="bg-primary text-white text-sm font-medium my-4 py-4 px-20 rounded-md"
                  >
                    Next
                  </button>
                  {/* </Link> */}
                </div>
              </section>
            </div>
          )}

          {formStep === 1 && (
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
                <Input
                  label="Your company name"
                  placeholder="osa@mudia.ment"
                  type="email"
                  className="w-full"
                />
                <Input
                  label="Company address"
                  placeholder="Osamudiamen"
                  type="text"
                />
                <Select label="Company size" />

                <Input
                  label="Company URL"
                  placeholder="companyname.workwise.ng"
                />

                <div className="flex">
                  {/* <Link to="/tryforfree"> */}
                  <button
                    onClick={backFormStep}
                    className="bg-white text-primary border border-primary text-xs lg:text-sm my-4 font-bold py-4 px-8 lg:px-16 mr-4 rounded-md"
                  >
                    Go back
                  </button>
                  {/* </Link> */}
                  {/* <Link to="/"> */}
                  <button
                    type="submit"
                    className="bg-primary text-white text-xs lg:text-sm my-4 font-bold py-4 px-6 lg:px-12 rounded-md"
                  >
                    Create account
                  </button>
                  {/* </Link> */}
                </div>
              </section>
            </div>
          )}
        </form>
      </SectionWrapper>
    </div>
  );
};

export { TryForFree };
