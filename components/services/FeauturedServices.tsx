import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";

// Define types for the props
interface Category {
  image: string;
  title: string;
  description: string;
}

interface FeaturedServicesProps {
  categories: Category[]; // Array of categories
  imagePath: string;      // Path for the images
}

const FeaturedServices: React.FC<FeaturedServicesProps> = ({
  categories,
  imagePath,
}) => {
  return (
    <FullContainer>
      <Container>
        <div className="text-center text-black py-12">
          <h2 className="text-xl uppercase font-semibold text-gray-600">
            Cleaning Service
          </h2>
          <h1 className="font-extrabold text-3xl capitalize text-gray-800 my-4">
            Featured Services
          </h1>
          <p className="mb-8 text-gray-600 max-w-2xl mx-auto">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {categories?.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden p-6"
            >
              <Image
                src={`${imagePath}/${item.image}`}
                width={600}
                height={400}
                alt={item.title}
                className="rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {item.title}
              </h2>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="px-4 py-2 bg-primary text-white font-medium rounded-md w-32 text-center">
                <Link href="/contact">Get a Quote</Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
};

export default FeaturedServices;
