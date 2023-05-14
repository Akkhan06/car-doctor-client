import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { title, img, price , _id} = service;
  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img className="h-72" src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          
          <div className="card-actions items-center">
          <p className="text-warning font-bold"> ${price}</p>
            <Link to={`/checkout/${_id}`}>
            <button className="btn btn-circle bg-warning border-none">
              <FaLongArrowAltRight />
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
