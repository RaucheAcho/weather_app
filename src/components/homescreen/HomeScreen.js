import CustomButton from "../custom-button/customButton";
import shower from "../../assets/img/Shower.png";
import { useState } from "react";

const HomeScreen = ({ handleMenu }) => {
  return (
    <>
      {/* search button and loacalisation */}
      <div className="bg-primary p-6 ">
        <div className="flex w-full justify-between items-center">
          <CustomButton
            onClick={() => handleMenu()}
            className="bg-gray-400 px-4 py-2 text-white shadow-md"
          >
            Search for places
          </CustomButton>
          <CustomButton className="bg-gray-400 h-10 w-10 rounded-full text-white shadow-md flex items-center justify-center">
            <span class="material-icons">gps_fixed</span>
          </CustomButton>
        </div>
        <div className="flex flex-col items-center space-y-10 text-gray-200 mt-8 bg-primary">
          <div className="w-38">
            <img src={shower} alt="" />
          </div>
          <p>
            <span className="text-8xl font-bold">15</span>
            <span className="text-4xl">°C</span>
          </p>
          <p className="text-4xl font-light">Shower</p>
          <div className="flex flex-col space-y-4 items-center">
            <p className="text-xl font-light">Today . Fri, 5 jun</p>
            <div className="flex">
              <span class="material-icons">location_on</span>
              <p className="text-xl font-light">Helsinki</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeScreen;
