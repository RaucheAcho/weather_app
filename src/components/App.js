import { useState } from "react";
import Card from "./cards/Card";
import WindStatus from "./cards/WindStatus";
import Humidity from "./cards/Humidity";
import Visibility from "./cards/Visibility";
import AirPressure from "./cards/AirPressure";
import HomeScreen from "./homescreen/HomeScreen";
import Layout from "./layouts/Layout";
import Menu from "./menu/Menu";
import Unitswitch from "./unitswitch/Unitswitch";

function App() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <Layout>
      <div className="bg-primary p-6 col-span-1">
        <Menu handleMenu={() => setisOpen(!isOpen)} open={isOpen} />
        <HomeScreen handleMenu={() => setisOpen(!isOpen)} />
      </div>
      <div className="bg-secondary col-span-2 ">
        <div className="mx-auto w-3/4 pt-10">
          <Unitswitch />
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-10 my-10">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex flex-col justify-between pb-4">
            <div className="flex flex-col items-start mb-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Today’s Hightlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
                <WindStatus />
                <Humidity />
                <Visibility />
                <AirPressure />
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
