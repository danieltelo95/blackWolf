import React from "react";
import './pricing.css';

const Box = (props) => {
  const { title, btnClass, btnTitle, price, feature } = props;
  return (
    <div className="card mb-4 shadow-sm bg-gradient-to-r from-violet-600 to-indigo-600">
      <div className="card-title">
        <h4 className="my-0 font-weight-semibold">{title}</h4>
      </div>
      <div className="card-body">
        <h1 className="card-title">
          ${price} <small className="card'title">/ mo</small>
        </h1>
        <ul className="list-unstyled mt-3 mb-4">
          {feature &&
            feature.map((data, index) => {
              return <li key={index}>{data}</li>;
            })}
        </ul>
        <button type="button" className={`btn btn-lg btn-block ${btnClass}`}>
          {btnTitle}
        </button>
      </div>
    </div>
  );
};

export default Box;
