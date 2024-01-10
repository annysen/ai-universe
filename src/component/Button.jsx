import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className="btn btn-primary">{props.children}</button>
    </div>
  );
};

export default Button;
