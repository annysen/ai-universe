import React from "react";

const SingleCard = (props) => {
  console.log(props.singleData);

  const { name, description, image, features } = props.singleData;
  return (
    <>
      <div className="card card-compact w-96 bg-base-100 shadow-2xl">
        <figure>
          <img className="w-full" src={image} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
