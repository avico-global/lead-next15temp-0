import React from "react";
import FullContainer from "../common/FullContainer";
import Image from "next/image";

const OurNumbers: React.FC = () => {
  return (
    <FullContainer>
      <div className=" mt-36  bg-gray-50">
        {/* Grid Section */}
        <div className="grid lg:grid-cols-2 items-center">
          {/* Left Image */}
          <div className="relative">
            <Image
              src="/img/number.jpg"
              height={700}
              width={1000}
              alt="Professional Cleaning Service Image"
              className=" object-cover"
              priority
            />
          </div>

          {/* Right Content */}
          <div className="w-full h-full flex items-center   justify-center p-8 bg-gray-100 space-y-8">
            <div className="  space-y-10 ">
              <h2 className="capitalize font-semibold text-blue-500 text-lg">
                Cleaning Service
              </h2>
              <h1 className="font-bold text-2xl lg:text-4xl capitalize text-gray-800">
                Our Numbers
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo.
              </p>

              {/* Cards Section */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                {/* Card 1: Happy Customers */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <h3 className="text-black text-lg font-bold">
                    Happy Customers
                  </h3>
                  <p className="text-primary text-3xl   font-bold">10,000+</p>
                </div>

                {/* Card 2: Excellent Employees */}
                <div className="bg-white shadow-md rounded-lg p-6 text-center">
                  <h3 className="text-black text-lg font-bold">
                    Excellent Employees
                  </h3>
                  <p className="text-primary text-3xl font-bold">500+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FullContainer>
  );
};

export default OurNumbers;
