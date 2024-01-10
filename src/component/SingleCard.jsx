import React from "react";

const SingleCard = (props) => {
  //   console.log(props.singleData);

  const { name, description, image, features, published_in } = props.singleData;

  console.log(features);
  return (
    <>
      <div className="card card-compact w-full bg-base-100 shadow-2xl">
        <figure className="w-full h-64 p-5">
          <img className="w-full" src={image} />
        </figure>
        <div className="card-body">
          <h4 className="text-xl font-semibold">Features:</h4>
          {features.map((feature, index) => (
            <>
              <ol>
                <li>
                  {index + 1}. {feature}
                </li>
              </ol>
            </>
          ))}
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
          <hr className="border-2 bg-slate-600 my-5" />
          <p>{description}</p>
          <h2 className="card-title">{name}</h2>

          {/* update and arrow btn  */}
          <div className="flex justify-between">
            {/* upodate section  */}
            <span>
              <div className="flex justify-center items-center text-gray-500 gap-2">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                    />
                  </svg>
                </span>
                <p>{published_in}</p>
              </div>
            </span>

            {/* arrow btn section  */}
            <span>
              <button className=" font-bold text-red-900 hover:text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                  />
                </svg>
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleCard;
