function WindStatus({ details }) {
  const { name, value, unit } = details;
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-3 text-gray-200 space-y-2">
      <p>{name}</p>
      <p className="">
        <span className="text-4xl font-extrabold">{value}</span>
        <span className="text-2xl font-regular">{unit}</span>
      </p>
      <div className="flex items-center">
        <span className="bg-gray-400 flex justify-center items-center w-10 h-10 rounded-full mr-2">
          <span className="material-icons w-4 transform -scale-1  -rotate-45">
            send
          </span>
        </span>
        <p>WSW</p>
      </div>
    </div>
  );
}

export default WindStatus;
