import Loader from "./Loader";
import React from "react";

function Button({ text, link, isLoading }) {
  return (
    <button
      href={link}
      className="btn mt-4 relative flex justify-center md:w-21"
    >
      {isLoading ? <Loader position="unset" width="fit" /> : text}
    </button>
  );
}

export default Button;
