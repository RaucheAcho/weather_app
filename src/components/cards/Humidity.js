function Humidity({ details }) {
  const { name, value, unit } = details;
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-3 text-gray-200 space-y-2">
      <p>{name}</p>
      <p className="">
        <span className="text-4xl font-extrabold">{value}</span>
        <span className="text-2xl font-regular">{unit}</span>
      </p>

      <div className="flex justify-center items-center mt-10 w-full">
        <div className="w-9/12 h2 bg-white rounded-full mt-2">
          <div
            style={{ width: `${value}${unit}` }}
            className="bg-yellow-400 h-2 rounded-full"
          ></div>
        </div>
      </div>
    </div>
  );
}

export default Humidity;
