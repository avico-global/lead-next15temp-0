import React from "react";
import FullContainer from "../common/FullContainer";
import Container from "../common/Container";
import { Check, Snowflake, ThumbsUp } from "lucide-react";

interface HomeBannerProps {
  image: string; // Image URL or path
  data?: {
    opacity?: number;
    textColor?: string;
    titleFontSize?: number;
  };
}

const Choose: React.FC<HomeBannerProps> = ({ image, data }) => {
  return (
    <FullContainer className="py-32 px-10 mt-8 relative overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-full " />

      {/* Content */}
      <Container>
       

        {/* Grid Section */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Card 0 */}
          <div className="flex items-start bg-gray-100 text-black p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex-shrink-0 p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-300">
              <Snowflake className="text-white" size={36} />
            </div>
            <div className="ml-6">
              <h3 className="font-semibold text-lg text-gray-800 capitalize mb-2">
                Holiday Cleaning
              </h3>
              <p className="text-gray-600">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime.
              </p>
            </div>
          </div>

          {/* Card 1 */}
          <div className="flex items-start bg-gray-100 text-black p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex-shrink-0 p-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-300">
              <Snowflake className="text-white" size={36} />
            </div>
            <div className="ml-6">
              <h3 className="font-semibold text-lg text-gray-800 capitalize mb-2">
                Eco-Friendly Cleaning
              </h3>
              <p className="text-gray-600">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex items-start bg-gray-100 text-black p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex-shrink-0 p-4 rounded-full bg-gradient-to-br from-green-500 to-green-300">
              <ThumbsUp className="text-white" size={36} />
            </div>
            <div className="ml-6">
              <h3 className="font-semibold text-lg text-gray-800 capitalize mb-2">
                Professional Equipment
              </h3>
              <p className="text-gray-600">
                Nam libero tempore, cum soluta nobis est eligendi optio cumque
                nihil impedit quo minus id quod maxime.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex items-start bg-gray-100 text-black p-6 rounded-lg shadow-md hover:shadow-lg transition">
            <div className="flex-shrink-0 p-4 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-300">
              <Check className="text-white" size={36} />
            </div>
            <div className="ml-6">
              <h3 className="font-semibold text-lg text-gray-800 capitalize mb-2">
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

export default Choose;
