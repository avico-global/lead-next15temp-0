import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import Link from "next/link";
// Define prop types for data
interface HomeBannerProps {
  image: any;
  title:string;
  tagline:string;
  imageTitle:string,
  data?: {
    opacity?: number;
    textColor?: string;
    titleFontSize?: number;
  };
}

const HomeBanner: React.FC<HomeBannerProps> = ({
 tagline,
  imageTitle,
  title,
  image,
  data,
}) => {
  return (
    <FullContainer
      className="py-40 overflow-hidden px-10"
      style={{
        backgroundColor: `rgba(74, 189, 245, ${(data?.opacity ?? 70) / 250})`,
        color: data?.textColor || "white",
      }}
    >
      {/* Ensure image is passed correctly */}
      <Image
        src={image} 
        alt="Banner Image"
        title={imageTitle}
        priority
        fill
        loading="eager"
        className="-z-10 w-full h-full object-cover absolute top-0"
        sizes="100vw" // This will make it responsive across all devices
      />
      <Container>
        <div className="grid lg:grid-cols-2">
          <div>
            <div className="w-full bg-white text-black p-12 border-l-4 border-primary">
              <h2 className=" capitalize font-semibold text-blue-500 ">
                clean & details
              </h2>
              <h1
                style={{ fontSize: data?.titleFontSize || 46 }}
                className="font-bold capitalize max-w-screen-md"
              >
                {title}
              </h1>
              <p className=" mb-8 text-gray-600 ">{tagline}</p>
            </div>
            <div className=" p-12 ">
              <div className=" px-4 py-4 bg-primary  w-44 -mt-20 rounded-md ">
                <Link
                  href="/contact"
                  className=" text-white flex justify-center text-center "
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default HomeBanner;
