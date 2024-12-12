import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Home Cleaning",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere, viva la vida penci.",
    image: "/img/F1.jpg",
    buttonText: "Get A Quote",
  },
  {
    title: "Office Cleaning",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere, viva la vida penci.",
    image: "/img/fs2.jpg",
    buttonText: "Get A Quote",
  },
  {
    title: "Restaurant Cleaning",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere, viva la vida penci.",
    image: "/img/fs3.jpg",
    buttonText: "Get A Quote",
  },
  {
    title: "Extra Services",
    description:
      "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere, viva la vida penci.",
    image: "/img/Fs4.jpg",
    buttonText: "Get A Quote",
  },
];

export default function FeaturedServices() {
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
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg  overflow-hidden  p-6"
            >
              <Image
                src={service.image}
                width={600}
                height={400}
                alt={service.title}
                className="rounded-md mb-4"
              />
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600  mb-4">
                {service.description}
              </p>
              <div className="px-4 py-2 bg-primary text-white font-medium rounded-md w-32 text-center">
                <Link href="/contact">{service.buttonText}</Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </FullContainer>
  );
}
