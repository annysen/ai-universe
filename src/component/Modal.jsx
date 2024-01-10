import React from "react";

const Modal = (props) => {
  const { tool_name, image_link, description, features, integrations } =
    props.singleData;

  console.log(props.singleData);
  return (
    <div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-11/12 max-w-5xl">
          <div className="card card-side bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{tool_name}</h2>
              <p>{description}</p>

              <div
                className="flex justify-between
              "
              >
                <div>
                  <h1 className="text-l font-semibold">Features:</h1>
                </div>
                <div>
                  <h1 className="text-l font-semibold">Integrations:</h1>
                </div>
              </div>
            </div>
            <figure>
              <img src={image_link && image_link[0]} />
            </figure>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;
