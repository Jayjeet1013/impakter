import Image from "next/image";
import React from "react";
import { industries } from "@/Data/Data";

const Industry: React.FC = () => {
  return (
    <div className="flex justify-center bg-[#F5F5F5]">
      <div className="px-4 py-8 w-full max-w-[1400px]">
        <div className="mb-6 text-start">
          <h2 className="text-[20px] md:text-[36px] text-[#000000CC] font-bold leading-[30px] md:leading-[40px] max-w-[1600px]">
            Compare how companies in one industry rank per their ESG score
          </h2>
        </div>

        {/* Grid of industries with image placeholders */}
        <div className="flex justify-center py-8 px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-10 md:gap-14 justify-items-center">
            {industries.map((industry) => (
              <div key={industry.id} className="flex flex-col items-center">
                <div className="w-36 h-36 lg:w-52 lg:h-52 border-2 p-2 bg-white rounded-md overflow-hidden -mb-24">
                  <Image
                    src={industry.img}
                    alt={industry.industry}
                    height={140}
                    width={140}
                    className=" md:w-[140px] w-[100px]   "
                  />
                </div>

                <span className="text-[#000000] hover:text-white hover:bg-blue-500 bg-white text-[20px] font-medium leading-[26px] border-2 border-blue-500 rounded-md text-center px-2 w-32 lg:w-48 py-1 mt-12">
                  {industry.industry}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Industry;
