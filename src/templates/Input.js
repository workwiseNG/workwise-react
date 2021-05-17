import React from "react";
import { useForm } from "react-hook-form";

const Input = ({ label, placeholder, className, type, ref, name }) => {
  // const { register } = useForm();
  return (
    <div className={`shadow-menu input-box border border-primary ${className}`}>
      <label
        className="text-xs text-primary label-text absolute"
        style={{ fontFamily: "Bw Nista Geometric DEMO" }}
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        // {...register( { required: true })}
        placeholder={placeholder}
        className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 input-font ${className}`}
      />
    </div>
  );
  // return (
  //   <div className="">
  //     <label class="input">
  //       <input class="input__field" type={type} placeholder={placeholder} />
  //       <span class="input__label font-BwN">Safety Guidelines</span>
  //     </label>
  //   </div>
  // );
};

// .input {
//   position: relative;
//   width: 100%;
//   outline: none !important;

//   &__label {
//     position: absolute;
//     left: 0;
//     top: 0;
//     padding: 0 .4rem ;
//     color: #dedede;
//     margin: 0.8rem;
//     background: #fff;
//     white-space: nowrap;
//     transform: translate(0, 0);
//     transform-origin: 0 0;
//     transition: transform 120ms ease-in;
//     z-index: 10;
//     font-size: 13px;
//     outline: none !important;
//   }
//   &__field {
//     box-sizing: border-box;
//     display: block;
//     width: 100%;

// <label class="input">
//   <input class="input__field" type="text" placeholder=" " />
//   <span class="input__label font-BwN">Safety Guidelines</span>
// </label>
export default Input;
