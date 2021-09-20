const Card = () => {
  return (
    <div className="bg-primary w-auto h-44 flex flex-col items-center justify-center space-y-6">
      <h3 className="text-white">Tomorrow</h3>
      <img
        className="w-14"
        src="https://www.metaweather.com/static/img/weather/sl.svg"
        alt=""
      />
      <div>
        <span className="text-white mr-4">16°C</span>
        <span className="text-gray-400">11°C</span>
      </div>
    </div>
  );
};

export default Card;
