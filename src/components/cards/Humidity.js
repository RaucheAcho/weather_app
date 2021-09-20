function Humidity() {
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-3 text-gray-200 space-y-2">
      <p>Humidity</p>
      <p className="">
        <span className="text-4xl font-extrabold">84</span>
        <span className="text-2xl font-regular">%</span>
      </p>

      <div className="flex justify-center items-center mt-10 w-full">
        <div className="w-9/12 h2 bg-white rounded-full mt-2">
          <div className="bg-yellow-400 w-32 h-2 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}

export default Humidity;
