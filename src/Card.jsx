import React from "react";
import web from "./car.svg";
import {NavLink} from 'react-router-dom';

const Card = (props) => {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto">
        <div className="card">
          <img src={web} className="card-img-top" alt="image" />
          <div className="card-body">
            <h5 className="card-title font-weight-bold">{props.title}</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink to="#" className="btn btn-primary">
              {props.btname}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;
