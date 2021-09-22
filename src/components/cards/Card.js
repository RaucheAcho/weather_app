const Card = ({ day }) => {
  let img =
    "https://www.metaweather.com/static/img/weather/" + `${day.imgUrl}.svg`;
  return (
    <div className="bg-primary w-auto h-44 flex flex-col items-center justify-center space-y-6">
      <h3 className="text-white">{day.weekday}</h3>
      <img className="w-14" src={img} alt="" />
      <div>
        <span className="text-white mr-4">{day.temperatureMax}°C</span>
        <span className="text-gray-400">{day.temperatureMin}°C</span>
      </div>
    </div>
  );
};

export default Card;
