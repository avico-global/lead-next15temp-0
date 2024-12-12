import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import { Check, Snowflake, ThumbsUp } from "lucide-react";

interface HomeBannerProps {
  image: string; // Image URL or path
  data?: {
    opacity?: number;
    textColor?: string;
    titleFontSize?: number;
  };
}

const WhyChoose: React.FC<HomeBannerProps> = ({ image, data }) => {
  return (
    <FullContainer
      className="py-32 px-10 mt-8 relative overflow-hidden"
      style={{
        backgroundColor: `rgba(74, 189, 245, ${(data?.opacity ?? 70) / 250})`,
        color: data?.textColor || "white",
      }}
    >
      {/* Background Image with Overlay */}
      <Image
        src={image || "/img/choose.jpg"}
        alt="Banner Background"
        title="Why Choose Us Banner"
        priority
        fill
        loading="eager"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        sizes="100vw"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 -z-10" />

      {/* Content */}
      <Container>
        {/* Header Section */}

        {/* Grid Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          <div className=" text-white">
            <h2 className="text-blue-100 text-lg font-semibold uppercase">
              Cleaning Service
            </h2>
            <h1
              style={{ fontSize: data?.titleFontSize || 42 }}
              className="font-bold capitalize text-3xl lg:text-4xl mt-1"
            >
              Why Choose Us
            </h1>
            <p className="text-gray-300 mx-auto mt-4 max-w-3xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </div>
          {/* Card 1 */}
          <div className="flex items-start bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex-shrink-0 p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-300">
              <Snowflake className="text-white" size={36} />
            </div>
            <div className="ml-6">
              <h3 className="font-semibold text-lg text-primary capitalize mb-2">
                Holiday Cleaning
              </h3>
              <p className="text-gray-600">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex-shrink-0 p-4 rounded-full bg-gradient-to-br from-green-500 to-green-300">
              <ThumbsUp className="text-white" size={36} />
            </div>
            <div className="ml-6">
              <h3 className="font-semibold text-lg text-primary capitalize mb-2">
                Professional Equipment
              </h3>
              <p className="text-gray-600">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex-shrink-0 p-4 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-300">
              <Check className="text-white" size={36} />
            </div>
            <div className="ml-6">
              <h3 className="font-semibold text-lg text-primary capitalize mb-2">
                Flexible Pricing
              </h3>
              <p className="text-gray-600">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </FullContainer>
  );
};

export default WhyChoose;
