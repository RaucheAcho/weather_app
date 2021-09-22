import CustomButton from "../custom-button/customButton";
import useMetaWeather from "../../hooks/userMetaWeather";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const HomeScreen = ({ handleMenu }) => {
  const { isLoading, isWeather } = useMetaWeather();
  console.log(isWeather);
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
            <span className="material-icons">gps_fixed</span>
          </CustomButton>
        </div>
        {isLoading ? (
          <div className="flex flex-col items-start space-y-10 text-gray-200 mt-8 bg-primary">
            <div className="w-38">
              <SkeletonTheme color="#100E2D" highlightColor="#1E213A">
                <Skeleton height={120} width={160} />
              </SkeletonTheme>
            </div>
            <p>
              <SkeletonTheme color="#100E2D" highlightColor="#1E213A">
                <Skeleton height={90} width={200} />
              </SkeletonTheme>
            </p>
            <SkeletonTheme color="#100E2D" highlightColor="#1E213A">
              <Skeleton height={30} width={70} />
            </SkeletonTheme>
            <div className="flex flex-col space-y-4 items-center">
              <SkeletonTheme color="#100E2D" highlightColor="#1E213A">
                <Skeleton height={30} width={100} />
              </SkeletonTheme>
              <div className="flex">
                <SkeletonTheme color="#100E2D" highlightColor="#1E213A">
                  <Skeleton height={30} width={100} />
                </SkeletonTheme>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center space-y-10 text-gray-200 mt-8 bg-primary">
            <div className="w-38">
              <img
                src={
                  process.env.PUBLIC_URL +
                  `/icons/${isWeather.currentDay.weatherIcon}.png`
                }
                alt=""
              />
            </div>
            <p>
              <span className="text-8xl font-bold">
                {isWeather.currentDay.temperature}
              </span>
              <span className="text-4xl">°C</span>
            </p>
            <p className="text-4xl font-light">
              {isWeather.currentDay.weatherDescription}
            </p>
            <div className="flex flex-col space-y-4 items-center">
              <p className="text-xl font-light">
                Today . {isWeather.currentDay.date}
              </p>
              <div className="flex">
                <span className="material-icons">location_on</span>
                <p className="text-xl font-light">
                  {isWeather.currentDay.location}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomeScreen;
