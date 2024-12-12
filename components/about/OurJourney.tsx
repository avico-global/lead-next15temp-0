import React from "react";
import FullContainer from "../common/FullContainer";
import Image from "next/image";
import Container from "../common/Container";

const OurJourney: React.FC = () => {
  return (
    <FullContainer>
        <Container>

        <div className="mx-auto max-w-[1100px] px-6 py-16 ">
          {/* First Section */}
          <div className="grid lg:grid-cols-2  items-center  ">
            <div>
              <Image
                src="/img/F1.jpg"
                height={500}
                width={600}
                alt="Professional Cleaning Service Image"
                className="rounded-lg"
                priority
              />
            </div>
            <div className="w-full space-y-6">
              <h2 className="capitalize font-semibold text-blue-500 text-lg">
                Cleaning Service
              </h2>
              <h1 className="font-bold text-2xl lg:text-4xl capitalize text-gray-800">
                Our Journey
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod 
                maxime placeat facere, viva la vida penci. Sed ut perspiciatis unde omnis iste 
                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
              </p>
            </div>
          </div>

          {/* Second Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-16">
            <div className="w-full space-y-6 order-last lg:order-first">
              <h2 className="capitalize font-semibold text-blue-500 text-lg">
                Cleaning Service
              </h2>
              <h1 className="font-bold text-2xl lg:text-4xl capitalize text-gray-800">
                15+ Years Of Experience
              </h1>
              <p className="text-gray-600 leading-relaxed">
                Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, 
                cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod 
                maxime placeat facere, viva la vida penci. Sed ut perspiciatis unde omnis iste 
                natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.
              </p>
            </div>
            <div>
              <Image
                src="/img/clean.jpg"
                height={500}
                width={600}
                alt="Expert Cleaning Service Image"
                className="rounded-lg"
                priority
              />
            </div>
          </div>
        </div>
        </Container>

    </FullContainer>

  );
};

export default OurJourney;
