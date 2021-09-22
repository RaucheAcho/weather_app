import React from "react";
import useMetaWeather from "../../hooks/userMetaWeather";
import Card from "./Card";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const CardList = () => {
  const { isError, isLoading, isWeather } = useMetaWeather();
  return (
    <>
      {isLoading ? (
        <>
          <SkeletonTheme color="#1E213A" highlightColor="#100E1D">
            <Skeleton height={150} width={120} />
          </SkeletonTheme>

          <SkeletonTheme color="#1E213A" highlightColor="#100E1D">
            <Skeleton height={150} width={120} />
          </SkeletonTheme>

          <SkeletonTheme color="#1E213A" highlightColor="#100E1D">
            <Skeleton height={150} width={120} />
          </SkeletonTheme>

          <SkeletonTheme color="#1E213A" highlightColor="#100E1D">
            <Skeleton height={150} width={120} />
          </SkeletonTheme>

          <SkeletonTheme color="#1E213A" highlightColor="#100E1D">
            <Skeleton height={150} width={120} />
          </SkeletonTheme>
        </>
      ) : (
        <>
          {isWeather.upcomingDays.map((day) => {
            return <Card key={day.weekday} day={day} />;
          })}
        </>
      )}
    </>
  );
};

export default CardList;
