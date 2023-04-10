import React, { useContext } from "react";
import { BasketContext } from "../context/BasketContextProvider";


const Modal = () => {
  const { basket, removefromBasket, increase, decrease } =
    useContext(BasketContext);

  console.log(basket.cart);
  return (
    <div>
      <div className="modal fade" id="edit-modal" tabIndex={-1}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header ">
              <h1
                className="modal-title text-center fs-5 "
                id="exampleModalLabel"
              >
                Ordered
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>

            {basket.cart?.map((item, index) => {
              return (
                <div key={index} className="modal-body">
                  <div className="card">
                    <div className="cardShow">
                      <img
                        src={item.image}
                        className="card-img-top mb-0 p-0"
                        alt={item.title}
                      />
                      <p className="">
                        Quantity:
                        <span className="quantity"> {item.count} </span>
                      </p>
                      <div className="text-center">
                        <p
                          className="quantitiyCoffee"
                          onClick={() => decrease(item.id)}
                        >
                          {" "}
                          -{" "}
                        </p>
                        <p
                          className="quantitiyCoffee"
                          onClick={() => increase(item.id)}
                        >
                          +
                        </p>
                      </div>
                    </div>

                    <div className="card-body mb-0">
                      <h5 className="card-title text-center mt-0">
                        {item.title}
                      </h5>
                      <p className="card-text mb-0 p-0">{item.description}</p>

                      <button
                        href="#"
                        className="btn btn-primary mb-0"
                        onClick={() => removefromBasket(item.id)}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
