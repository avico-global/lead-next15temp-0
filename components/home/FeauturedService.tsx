import React from "react";
import Image from "next/image";
import Link from "next/link";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";

// Define prop types for data
interface HomeBannerProps {
  image?: string; // Image URL or path
  data?: {
    opacity?: number;
    textColor?: string;
    titleFontSize?: number;
  };
}

const FeaturedService: React.FC<HomeBannerProps> = ({ image, data }) => {
  return (
    <FullContainer>
      <Container>
        {/* Header Section */}
        <div className="text-center mb-12">
          5<h2 className="text-blue-500  text-lg font-semibold uppercase">
            Cleaning Service
          </h2>
          <h1
            style={{ fontSize: data?.titleFontSize || 46 }}
            className="text-black font-bold capitalize mb-4"
          >
            Featured Services
          </h1>
          <p className="text-gray-600 mx-auto max-w-3xl">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero
            tempore, cum soluta nobis est eligendi optio cumque nihil impedit
            quo minus id quod maxime placeat facere, viva la vida penci.
          </p>
        </div>

        {/* Services Section */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
          {/* Service Card */}
          {["/img/F1.jpg", "/img/F2.jpg", "/img/F3.jpg"].map((img, index) => (
            <div
              key={index}
              className="relative bg-white rounded-lg shadow-md overflow-hidden"
            >
              {/* Service Image */}
              <div className="relative w-full aspect-[4/3]">
                <Image
                  src={img}
                  alt={`Service ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Service Content */}
              <div className="p-6">
               
                <h2
                  style={{ fontSize: data?.titleFontSize || 30 }}
                  className="text-black font-bold capitalize text-xl my-4"
                >
                  Cleaning Service
                </h2>
                <p className="text-gray-600 mb-6">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam
                  libero tempore, cum soluta nobis est eligendi optio cumque
                  nihil impedit.
                </p>
                <Link href="/contact">
                  <p className="block bg-primary text-white text-center py-2 px-4 rounded-md hover:bg-opacity-90 transition">
                    Get a Quote
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
};

export default FeaturedService;
