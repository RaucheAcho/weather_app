import React from "react";

const City = ({ city, onClick }) => {
  return (
    <>
      <div
        onClick={onClick}
        className="group border border-transparent hover:border-white cursor-pointer text-white text-lg flex justify-between py-2 px-2 mb-10"
      >
        <p>{city.title}</p>
        <span className="material-icons opacity-0 group-hover:opacity-100">
          navigate_next
        </span>
      </div>
    </>
  );
};

export default City;
