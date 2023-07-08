import React from "react";
import Img from "../../assets/logo-full-red.svg";

const AaLogo = () => {
  return (
    <div>
      <img
        width={400}
        className="mt-5 mb-2 fixed"
        src={Img}
        alt="App Academy Logo"
      />
    </div>
  );
};

export default AaLogo;
