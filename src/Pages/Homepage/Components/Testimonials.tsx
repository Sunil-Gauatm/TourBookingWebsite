import React from "react";
import image from "../../../assets/Image.png";
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";


const Testimonials: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 py-10 h-screen">
      <div className="flex md:flex-row   md:justify-between md:items-center flex-col justify-center">
        {/* left section of testiomonials  */}
        <div className="text-center md:text-start ">
          <h1 className="text-lg font-semibold text-gray-600 ">Testimonials</h1>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mt-6 leading-snug font-semibold">
            What people say about Us.
          </h1>
        </div>

        {/* right section  */}

        <div className="flex flex-row items-center mt-6">
          <div className="mx-auto font-mono md:w-2/4 w-[70%] relative mt-10 ">
            {/* main box  */}
            <div>
              <div className="shadow-2xl rounded-2xl px-16  py-9 relative z-10 bg-white">
                <h1 className="">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </h1>
                <h1 className="text-lg font-semibold text-gray-600 mt-8">
                  Mike taylor
                </h1>
                <h1>Lahore, Pakistan</h1>
              </div>

              <div className="border border-gray-200 rounded-2xl px-16  py-9 absolute -right-15 -bottom-30 -z-20">
                <h1 className="">
                  “On the Windows talking painted pasture yet its express
                  parties use. Sure last upon he same as knew next. Of believed
                  or diverted no.”
                </h1>
                <h1 className="text-lg font-semibold text-gray-600 mt-8">
                  Mike taylor
                </h1>
                <h1>Lahore, Pakistan</h1>
              </div>
            </div>

            {/* image section  */}
            <div className="">
              <img
                src={image}
                alt=""
                className="absolute -top-8 -left-8 w-20 h-20 rounded-full object-cover z-10"
              />
            </div>
          </div>

          <div>
            <IoIosArrowUp />
            <IoIosArrowDown />

          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
