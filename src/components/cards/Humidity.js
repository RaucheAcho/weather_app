function Humidity() {
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-3 text-gray-200 space-y-2">
      <p>Humidity</p>
      <p className="">
        <span className="text-4xl font-extrabold">84</span>
        <span className="text-2xl font-regular">%</span>
      </p>
      <div className="flex items-center">
        <span className="bg-gray-400 flex justify-center items-center w-10 h-10 rounded-full mr-2">
          <span></span>
        </span>
        <p>WSW</p>
      </div>
    </div>
  );
}

export default Humidity;
