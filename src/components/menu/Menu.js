import CustomButton from "../custom-button/customButton";
import FormInput from "../form-input/FormInput";

const Menu = () => {
  return (
    <>
      {/* search Menu */}
      <div className="border p-6 absolute z-20 top-0 left-0 w-full h-screen lg:w-1/3 bg-primary transform ">
        <CustomButton className="material-icons text-gray-200 text-4xl absolute right-0 top-0 mr-8 mt-8">
          close
        </CustomButton>
        <div className="flex justify-center mt-20">
          <FormInput
            placeholder="search location"
            className="text-gray-200 w-full h-10 bg-primary outline-none border border-gray-200 px-2 rounded-none"
          />
          <CustomButton className="bg-blue-600 px-4 ml-1 text-white outline-none">
            Search
          </CustomButton>
        </div>
      </div>
    </>
  );
};

export default Menu;
