import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import Link from "next/link";
// Define prop types for data
interface HomeBannerProps {
  image: string; // Image URL or path
  title:String;
  data?: {
    opacity?: number;
    textColor?: string;
    titleFontSize?: number;
  };
}

const AboutBanner: React.FC<HomeBannerProps> = ({ image, data,title }) => {
  return (
    <FullContainer
      className="py-12 overflow-hidden px-10 mb-16 "
      style={{
        backgroundColor: `rgba(74, 189, 245, ${(data?.opacity ?? 200) / 250})`,
        color: data?.textColor || "white",
      }}
    >
      {/* Ensure image is passed correctly */}
      <Image
        src={image || "/img/1.jpg"} // If image is not provided, fallback to "/img/1.jpg"
        alt="Banner Image"
        title="Banner"
        priority
        fill
        loading="eager"
        className="-z-10 w-full h-full object-cover absolute top-0"
        sizes="100vw" // This will make it responsive across all devices
      />
      <Container>
        <div className="grid ">
            <div className="w-full text-center  text-black p-12 ">
              <h2 className=" capitalize font-semibold text-white ">
                CLEANING SERVICE
              </h2>
              <h1
                style={{ fontSize: data?.titleFontSize || 54 }}
                className="font-bold capitalize text-white  "
              >
               {title}
              </h1>
              <p className=" mb-8 text-white max-w-3xl ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
              </p>
            </div>
           

        </div>
      </Container>
    </FullContainer>
  );
};

export default AboutBanner;
