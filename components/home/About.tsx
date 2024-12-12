import React from 'react'
import FullContainer from '../common/FullContainer'
import Container from '../common/Container'
import Image from 'next/image'
import Link from 'next/link'

interface AboutProps {
  data?: {
    titleFontSize?: number;
  };
}

const About: React.FC<AboutProps> = ({ data }) => {
  return (
    <FullContainer className="relative ">
      <Container>
        {/* Set the background image using Tailwind classes */}
        <div className="">
          <Image
            src="/img/clean.jpg"
            width="1400"
            height="1000"
            alt="Banner Image"
            title="Banner"
           
          />
        </div>

        {/* Grid layout for content */}
        <div className="grid lg:grid-cols-2 gap-20 relative z-10">
          {/* Left section with content */}
          <div>
            <div className="w-full  text-black  py-12 ">
              <h2 className="capitalize   font-semibold text-blue-500">
                Cleaning Service
              </h2>
              <h1
                style={{ fontSize: data?.titleFontSize || 46 }} // Use dynamic font size or fallback
                className="font-bold capitalize max-w-screen-md"
              >
                About Our Company
              </h1>
              <p className="mb-8 text-gray-600">
                Et harum quidem rerum facilis est et expedita distinctio. Nam
                libero tempore, cum soluta nobis est eligendi optio cumque nihil
                impedit quo minus id quod maxime placeat facere, viva la vida
                penci.
              </p>

              <p className="mb-8 text-gray-600">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae, viva la vida
              </p>

              {/* Contact Us Button */}
              <div className="">
              <div className=" px-4 py-4 bg-primary  w-44  rounded-md ">
                <Link
                  href="/contact"
                  className=" text-white flex justify-center text-center "
                >
                  Contact Us
                </Link>
              </div>
            </div>
            </div>
          </div>

          {/* Right section with image */}
          <div className="relative -mt-28">
            <Image
              src="/img/clean1.jpg"
              width="500"
              height="400"
              alt="Banner Image"
              title="Banner"
              
            />
          </div>
        </div>
      </Container>
    </FullContainer>
  )
}

export default About;
