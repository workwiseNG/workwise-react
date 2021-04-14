import React from "react";

const Input = ({ label, placeholder, className, type }) => {
  return (
    <div className={`shadow-menu input-box border border-primary ${className}`}>
      <p
        className="text-xs text-primary label-text absolute"
        style={{ fontFamily: "Bw Nista Geometric DEMO" }}
      >
        {label}
      </p>
      <input
        type={type}
        placeholder={placeholder}
        className={`p-2 outline-none w-full text-base text-greyTwo py-4 px-4 input-font ${className}`}
      />
    </div>
  );
};

export default Input;
