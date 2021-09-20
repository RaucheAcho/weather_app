function DayDetailsCard() {
  return (
    <div className="bg-primary flex flex-col items-center justify-center py-3 text-gray-200 space-y-2">
      <p>Wind status</p>
      <p className="">
        <span className="text-4xl font-extrabold">7</span>
        <span className="text-2xl font-regular">mph</span>
      </p>
      <div className="flex">
        <span className="bg-gray-400 flex justify-center items-center w-6 h-6 rounded-full mr-2">
          D
        </span>
        <p>WSW</p>
      </div>
    </div>
  );
}

export default DayDetailsCard;
