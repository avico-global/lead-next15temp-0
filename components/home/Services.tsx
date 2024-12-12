import React from "react";
import Image from "next/image";
import {
  BookUser,
  Calendar1,
  DollarSign,
  Landmark,
  UserRound,
} from "lucide-react";

const serviceData = [
  {
    image: "/img/S1.jpg",
    icon: <UserRound className="text-white text-3xl" />,
    title: "Personal Cleaning",
    description: "Detailed and professional cleaning tailored for you.",
    bgGradient: "bg-gradient-to-t from-blue-600 to-transparent",
    textColor: "text-white",
  },
  {
    icon: <Landmark className="text-white text-3xl" />,
    title: "Office Cleaning",
    description: "Maintain a clean and professional work environment.",
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    image: "/img/s2.jpg",
    icon: <BookUser className="text-white text-3xl" />,
    title: "Home Organization",
    description: "Simplify and organize your living spaces.",
    bgGradient: "bg-gradient-to-t from-blue-600 to-transparent",
    textColor: "text-white",
  },
  {
    icon: <DollarSign className="text-white text-3xl" />,
    title: "Affordable Cleaning",
    description: "Quality cleaning services within your budget.",
    bgColor: "bg-gray-100",
    textColor: "text-black",
  },
  {
    image: "/img/S3.jpg",
    icon: <Calendar1 className="text-white text-3xl" />,
    title: "Event Cleaning",
    description: "Efficient cleaning for all your special events.",
    bgGradient: "bg-gradient-to-t from-blue-600 to-transparent",
    textColor: "text-white",
  },
];

const Services: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 mb-40">
      {serviceData.map((service, index) => (
        <div
          key={index}
          className={`relative group overflow-hidden shadow-lg ${
            service.bgColor || ""
          }`}
        >
          {service.image && (
            <Image
              src={service.image}
              alt={`${service.title} Image`}
              title={service.title}
              priority
              fill
              loading="eager"
              className="object-cover w-full h-full absolute top-0 left-0 transition-transform group-hover:scale-105"
              sizes="100vw"
            />
          )}
          {service.bgGradient && (
            <div
              className={`absolute inset-0 ${service.bgGradient} opacity-70 group-hover:opacity-80 transition-opacity`}
            ></div>
          )}
          <div className="relative z-10 p-8">
            <div className="bg-primary p-4 rounded-full inline-block mb-4 shadow-md">
              {service.icon}
            </div>
            <h2
              className={`font-bold text-xl capitalize mb-2 ${
                service.textColor || "text-gray-900"
              }`}
            >
              {service.title}
            </h2>
            <p
              className={`text-sm ${
                service.textColor === "text-white"
                  ? "text-white"
                  : "text-gray-700"
              }`}
            >
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
