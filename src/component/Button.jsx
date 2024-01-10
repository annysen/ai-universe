import React from "react";

const Button = (props) => {
  return (
    <div className="text-center my-5">
      <button className="btn btn-primary">{props.children}</button>
    </div>
  );
};

export default Button;
