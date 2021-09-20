const Unitswitch = () => {
  return (
    <>
      <div className="hidden md:flex justify-end">
        <span className="bg bg-gray-200 w-10 h-10 rounded-full flex items-center justify-center mr-4 text-secondary">
          °C
        </span>
        <span className="bg bg-primary w-10 h-10 rounded-full flex items-center justify-center text-gray-200">
          °F
        </span>
      </div>
    </>
  );
};

export default Unitswitch;
