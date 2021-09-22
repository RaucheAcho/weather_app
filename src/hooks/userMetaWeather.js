import { useEffect, useState } from "react";
import axios from "../axios/axios";

//helpers
import getCurrentDayWeather from "../helpers/getCurrentDayWeather";
import getCurrentDayDetailedWeather from "../helpers/getCurrentDayDetailedWeather";
import getUpcomingDaysWeather from "../helpers/getUpcomingDaysWeather";

const useMetaWeather = () => {
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [isWeather, setWeather] = useState(null);
  const [cities, setCities] = useState(null);
  const [cityName, setCityName] = useState("Abidjan");

  //api stuff
  const searchLocation = async (term) => {
    try {
      const { data } = await axios(`/search`, {
        params: { query: term },
      });
      if (!data || data.length === 0) {
        setError("There is no such location");
        setLoading(false);
        return;
      }

      setCities(data);
      return data;
    } catch (error) {
      setError(error.message);
      console.log(error.message);
    }
  };

  const getWoeid = async (location) => {
    const { data } = await axios(`/search`, {
      params: { query: location },
    });

    if (!data || data.length === 0) {
      setError("There is no such location");
      setLoading(false);
      return;
    }

    return data[0];
  };

  const getWeatherData = async (woeid) => {
    const { data } = await axios(`/${woeid}`);

    if (!data || data.length === 0) {
      setError("Something went wrong");
      setLoading(false);
      return;
    }

    return data;
  };

  const gatherWeatherData = (data) => {
    const currentDay = getCurrentDayWeather(
      data.consolidated_weather[0],
      data.title
    );

    const currentDayDetails = getCurrentDayDetailedWeather(
      data.consolidated_weather[0]
    );
    const upcomingDays = getUpcomingDaysWeather(data.consolidated_weather);

    setWeather({ currentDay, currentDayDetails, upcomingDays });
    setLoading(false);
  };

  //get clicked location
  const getLocation = async (location) => {
    setLoading(true);
    setError(false);

    const response = await getWoeid(location);
    if (!response?.woeid) return;

    const data = await getWeatherData(response.woeid);
    if (!data) return;

    gatherWeatherData(data);
    //console.log(data);
  };

  useEffect(() => {
    getLocation(cityName);
  }, [cityName]);

  console.log(cityName);

  return {
    isError,
    isLoading,
    isWeather,
    getLocation,
    searchLocation,
    cities,
    setCityName,
    setCities,
  };
};

export default useMetaWeather;
