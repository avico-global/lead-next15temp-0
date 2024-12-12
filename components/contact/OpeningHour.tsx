import React from "react";
import FullContainer from "../common/FullContainer";
import Image from "next/image";
import { Clock } from "lucide-react";

export default function OpeningHour() {
  return (
    <FullContainer className="mx-auto max-w-[1300px]">
      <div className="grid lg:grid-cols-2 gap-8 my-16 ">
        {/* First Column: Opening Hours */}
        <div>
          <div className="w-full space-y-6">
            <h1 className="font-bold capitalize text-4xl">Opening Hours</h1>
            <p className="pb-8 text-gray-500 max-w-3xl">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo
            </p>
            <div className="space-y-4">
              {/* Row for each day */}
              {[
                { day: "Monday", time: "9:00 AM - 5:00 PM" },
                { day: "Tuesday", time: "9:00 AM - 5:00 PM" },
                { day: "Wednesday", time: "9:00 AM - 5:00 PM" },
                { day: "Thursday", time: "9:00 AM - 5:00 PM" },
                { day: "Friday", time: "9:00 AM - 5:00 PM" },
                { day: "Saturday", time: "10:00 AM - 2:00 PM" },
                { day: "Sunday", time: "Closed" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  {/* Icon */}
                  <Clock className="w-6 h-6 text-blue-500" />
                  {/* Day */}
                  <span className="font-medium text-gray-700 w-24">
                    {item.day}
                  </span>
                  {/* Line */}
                  <div className="flex-grow border-t border-gray-300" />
                  {/* Time */}
                  <span className="text-gray-500">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Second Column: Image */}
        <div>
          <Image src="/img/C2.jpg" width="700" height="500" alt="Contact" />
        </div>
      </div>
    </FullContainer>
  );
}
