function AirPressure({ details }) {
  const { name, value, unit } = details;
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-3 text-gray-200 space-y-2">
      <p>{name}</p>
      <p className="">
        <span className="text-4xl font-extrabold">{parseInt(value)}</span>
        <span className="text-2xl font-regular">{unit}</span>
      </p>
    </div>
  );
}

export default AirPressure;
