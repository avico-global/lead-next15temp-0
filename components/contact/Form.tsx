import React from "react";
import FullContainer from "../common/FullContainer";
import { Container } from "postcss";
import Image from "next/image";

export default function Form() {
  return (
    <FullContainer className=" mx-auto max-w-[1300px]  ">
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <Image src="/img/1.jpg" width="700" height="500" alt="Contact" />
        </div>

        <div>
          <div className="w-full space-y-3  ">
            <h2 className=" capitalize font-semibold text-primary  ">
              CLEANING SERVICE
            </h2>
            <h1 className="font-bold capitalize  text-4xl ">
              Send Us A Message
            </h1>
            <p className=" pb-8 text-gray-500  max-w-3xl ">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo
            </p>
          </div>
          <form className="space-y-4">
            {/* Flex container for name, email, and subject fields */}
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>

            {/* Message field on a new line */}
            <textarea
              placeholder="Your message"
              className="w-full p-2 pb-20 border border-gray-300 rounded-md"
              // rows="4"
            />

            {/* Submit button */}
            <button
              type="submit"
              className="w-full bg-primary text-white py-2 rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </FullContainer>
  );
}
