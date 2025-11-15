import React from "react";
import { IoMdClose } from "react-icons/io";

interface AddDestinationModalProps {
  open: boolean;
  onclose: () => void;
}

const AddDestinationModal: React.FC<AddDestinationModalProps> = ({
  open,
  onclose,
}) => {
  if (!open) return null;
  return (
    <div className="fixed shadow-lg inset-0 bg-primary z-50 rounded-2xl flex-1">
      {/* top section of the page  */}
      <div className="px-10 py-4 flex flex-row justify-between items-center border-b border-gray-300/20">
        <h1 className="text-white font-semibold text-lg md:text-2xl">
          Add Destination
        </h1>
        <IoMdClose size={30} color="white" onClick={onclose} />
      </div>

      {/* form section  */}
        <form action="submit">
      <div className="px-10 py-8 grid grid-cols-1 gap-6 md:grid-cols-2 ">

            {/* name field  */}
          <div className="flex flex-col gap-2 items-start  md:items-start">
            <label htmlFor="Name" className="text-white font-semibold text-lg">
              Destination Name
            </label>
            <input
              type="text"
              id="Name"
              className="shadow-2xs bg-white p-2 rounded-sm w-full outline-0 focus:ring-2 focus:ring-green-700"
              placeholder="Enter the name"
            />
          </div>
        
          
      </div>
        </form>
    </div>
  );
};

export default AddDestinationModal;
