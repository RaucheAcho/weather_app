import { useState } from "react";
import HomeScreen from "./homescreen/HomeScreen";
import Layout from "./layouts/Layout";
import Menu from "./menu/Menu";
import Unitswitch from "./unitswitch/Unitswitch";
import useMetaWeather from "../hooks/userMetaWeather";
import CardList from "./cards/CardList";
import ItemList from "./cards/ItemList";
import { Helmet } from "react-helmet";

function App() {
  const {
    isError,
    isLoading,
    searchLocation,
    cities,
    setCities,
    isWeather,
    setCityName,
  } = useMetaWeather();
  //console.log(isWeather);
  const [isOpen, setisOpen] = useState(false);
  const submitLocation = (value) => {
    searchLocation(value);
  };

  return (
    <Layout>
      <Helmet>
        <meta charSet="utf-8" />
        <title>weather app test</title>
      </Helmet>
      <div className="bg-primary p-6 col-span-1">
        <Menu
          setCities={setCities}
          cityName={setCityName}
          isLoading={isLoading}
          error={isError}
          cities={cities}
          submitLocation={submitLocation}
          handleMenu={() => setisOpen(!isOpen)}
          open={isOpen}
        />
        <HomeScreen
          isWeather={isWeather}
          isLoading={isLoading}
          handleMenu={() => setisOpen(!isOpen)}
        />
      </div>
      <div className="bg-secondary col-span-2 ">
        <div className="mx-auto w-3/4 pt-10">
          <Unitswitch />
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 my-10">
            <CardList isWeather={isWeather} isLoading={isLoading} />
          </div>
          <div className="flex flex-col justify-between pb-4">
            <div className="flex flex-col items-start mb-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Today’s Hightlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <ItemList isWeather={isWeather} isLoading={isLoading} />
              </div>
            </div>
          </div>
          <p className="text-lg text-gray-200 text-center pt-10">
            created by <span className="font-bold">Rauche Acho</span> -
            devChallenges.io
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default App;
