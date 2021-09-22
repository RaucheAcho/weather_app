import WindStatus from "./WindStatus";
import Humidity from "./Humidity";
import Visibility from "./Visibility";
import AirPressure from "./AirPressure";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const ItemList = ({ isLoading, isWeather }) => {
  return (
    <>
      {isLoading ? (
        <>
          <SkeletonTheme color="#1E213A" highlightColor="#100E1D">
            <Skeleton height={120} width={"100%"} />
          </SkeletonTheme>

          <SkeletonTheme color="#1E213A" highlightColor="#100E1D">
            <Skeleton height={120} width={"100%"} />
          </SkeletonTheme>

          <SkeletonTheme color="#1E213A" highlightColor="#100E1D">
            <Skeleton height={120} width={"100%"} />
          </SkeletonTheme>

          <SkeletonTheme color="#1E213A" highlightColor="#100E1D">
            <Skeleton height={120} width={"100%"} />
          </SkeletonTheme>
        </>
      ) : (
        <>
          <WindStatus details={isWeather.currentDayDetails[0]} />
          <Humidity details={isWeather.currentDayDetails[1]} />
          <Visibility details={isWeather.currentDayDetails[2]} />
          <AirPressure details={isWeather.currentDayDetails[3]} />
        </>
      )}
    </>
  );
};

export default ItemList;
