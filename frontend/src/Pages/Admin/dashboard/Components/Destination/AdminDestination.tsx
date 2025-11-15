import React from "react";
import { CiSearch } from "react-icons/ci";
import AddDestinationModal from "./AddDestinationModal";

const AdminDestination: React.FC = () => {

  const[openModal, setOpenModal] = React.useState(false)
  return (
    <div>
      {/* top section  */}

      <div className="flex flex-row gap-8 items-center">
        {/* search destination here */}
        <div className="relative flex-1">
          <CiSearch
            size={20}
            className="absolute left-3 top-1/2 -translate-y-1/2 "
          />

          <input
            type="text"
            className="shadow-xl w-full px-12 py-3 border border-amber-800 rounded-full outline-0 focus:ring-1 focus:ring-amber-950"
            placeholder="Search..."
          />
        </div>

        {/* add button  */}

        <div>
          <button className="border-2 px-12 py-3 rounded-md bg-green-700 text-white text-xl font-semibold  cursor-pointer transition-all duration-200 ease-in-out hover:text-green-700 hover:bg-white"
          onClick={()=> setOpenModal(true)}
          >
            Add
          </button>
        </div>

        {/* modal  */}

        <AddDestinationModal onclose={() =>setOpenModal(false)} open={openModal}/>
      </div>
    </div>
  );
};

export default AdminDestination;
