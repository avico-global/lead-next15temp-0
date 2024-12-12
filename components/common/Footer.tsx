import React from "react";
import Image from "next/image";
import Container from "../common/Container";
import FullContainer from "../common/FullContainer";
import { Clock, Phone, Mail } from "lucide-react";
import Link from "next/link";

interface HomeBannerProps {
  image: string; // Image URL or path
  data?: {
    opacity?: number;
    textColor?: string;
    titleFontSize?: number;
  };
}

const Footer: React.FC<HomeBannerProps> = ({ image, data }) => {
  return (
    <FullContainer
      className="py-20 px-10 relative overflow-hidden"
      style={{
        backgroundColor: `rgba(0, 0, 0, ${(data?.opacity ?? 70) / 100})`,
        color: data?.textColor || "white",
      }}
    >
      {/* Background Image with Overlay */}
      <Image
        src={image || "/img/Footer.jpg"}
        alt="Footer Background"
        title="Footer Banner"
        priority
        fill
        loading="eager"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        sizes="100vw"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 -z-10" />

      {/* Content */}
      <Container>
        <div className="text-center text-white mb-12">
          <h2 className="text-blue-100 text-lg font-semibold uppercase">
            Contact Us
          </h2>
          <h1
            style={{ fontSize: data?.titleFontSize || 42 }}
            className="font-bold capitalize text-3xl lg:text-4xl mt-1"
          >
            We're Here to Help
          </h1>
          <p className="text-gray-300 mx-auto mt-4 max-w-3xl">
            Whether you need support or just want to say hello, reach out to us
            anytime. We’re happy to assist you.
          </p>
        </div>

        {/* Grid Section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Card 1: Opening Hours */}
          <div className="flex flex-col items-center text-center bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-300">
              <Clock className="text-white" size={36} />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 capitalize mt-4">
              Opening Hours
            </h3>
            <p className="text-gray-600 mt-2">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere, penci design viva la vida.
            </p>
          </div>

          {/* Card 2: Hotline */}
          <div className="flex flex-col items-center text-center bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="p-4 rounded-full bg-gradient-to-br from-green-500 to-green-300">
              <Phone className="text-white" size={36} />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 capitalize mt-4">
              Hotline
            </h3>
            <p className="text-gray-600 mt-2">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere.
            </p>
          </div>

          {/* Card 3: Email */}
          <div className="flex flex-col items-center text-center bg-white text-black p-6 rounded-lg shadow-md hover:shadow-lg transition transform hover:-translate-y-1">
            <div className="p-4 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-300">
              <Mail className="text-white" size={36} />
            </div>
            <h3 className="font-semibold text-lg text-gray-800 capitalize mt-4">
              Email Us
            </h3>
            <p className="text-gray-600 mt-2">
            Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere, penci design viva la vida.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-600 pt-6 mt-12 text-center">
          <ul className="flex justify-center gap-8 text-gray-300">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition">
              About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </FullContainer>
  );
};

export default Footer;
