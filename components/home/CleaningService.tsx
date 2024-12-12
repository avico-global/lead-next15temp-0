import React from "react";
import Image from "next/image";
import Link from "next/link";

// Define prop types for data
interface HomeBannerProps {
  image: string; // Image URL or path
  data?: {
    opacity?: number;
    textColor?: string;
    titleFontSize?: number;
  };
}

const CleaningService: React.FC<HomeBannerProps> = ({ image, data }) => {
  return (
    <div className="grid lg:grid-cols-3 mb-40">
      {/* Service 1 */}
      <div className="relative">
        <Image
          src={image || "/img/C1.jpg"} // Fallback to "/img/C1.jpg" if no image is provided
          alt="Service 1 Image"
          title="Service 1"
          priority
          fill
          loading="eager"
          className="object-cover w-full h-full absolute top-0 left-0"
          sizes="100vw"
        />
      </div>

      {/* Service 2 */}
      <div className="text-center relative z-10 bg-gray-100">
        <div className="w-full  text-black  p-12 ">
          <h2 className="capitalize font-semibold text-blue-500">
            Clean & Details
          </h2>
          <h1
            style={{ fontSize: data?.titleFontSize || 46 }}
            className="font-bold capitalize max-w-screen-md"
          >
            Cleaning Service
          </h1>
          <p className=" text-gray-600">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere, viva la vida penci.
          </p>
        </div>
        <div className=" px-4 py-4 bg-primary   lg:mx-60  mb-10  rounded-md flex justify-center text-center ">
                <Link
                  href="/contact"
                  className=" text-white  "
                >
                  Contact Us
                </Link>
              </div>
      </div>

      {/* Service 3 */}
      <div className="relative">
        <Image
          src={image || "/img/C2.jpg"} // Fallback to "/img/C2.jpg" if no image is provided
          alt="Service 3 Image"
          title="Service 3"
          priority
          fill
          loading="eager"
          className="object-cover w-full h-full absolute top-0 left-0"
          sizes="100vw"
        />
      </div>
    </div>
  );
};

export default CleaningService;
