import { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import City from "../city/City";
import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/FormInput";

const Menu = ({ open, handleMenu, submitLocation, cities, cityName }) => {
  const [locationName, setLocationName] = useState("");
  const [loader, setLoader] = useState(true);

  const handleChange = (event) => {
    setLocationName(event.target.value);
  };
  //submit form to search city
  const handleSubmit = (event) => {
    event.preventDefault();
    if (!locationName || locationName === "") return;
    submitLocation(locationName);
    setLocationName("");
  };
  const onGetLocation = (location) => {
    cityName(location);
  };
  //console.log(cities);
  return (
    <>
      {/* search Menu */}
      <div
        className={`p-6 absolute z-20 top-0 left-0 w-full h-screen lg:w-1/3 bg-primary transition-all duration-300 transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <CustomButton
          onClick={() => handleMenu()}
          className="material-icons text-gray-200 text-4xl absolute right-0 top-0 mr-8 mt-8"
        >
          close
        </CustomButton>
        <form onSubmit={handleSubmit} className="flex justify-center mt-20">
          <FormInput
            value={locationName}
            handleChange={handleChange}
            placeholder="search location"
            className="text-gray-200 w-full h-10 bg-primary outline-none border border-gray-200 px-2 rounded-none"
          />
          <CustomButton
            type="submit"
            className="bg-blue-600 px-4 ml-1 text-white outline-none"
          >
            Search
          </CustomButton>
        </form>

        <div className="h-96 overflow-y-auto mt-10">
          {cities ? (
            cities.map((city) => {
              return (
                <City
                  onClick={() => onGetLocation(city.title)}
                  key={city.woeid}
                  city={city}
                />
              );
            })
          ) : (
            <>
              <div
                type="button"
                className="w-full flex  justify-center mt-20"
                disabled
              >
                <div className="animate-spin border-b-4 border-t-4 rounded-full h-10 w-10 mr-3"></div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Menu;
