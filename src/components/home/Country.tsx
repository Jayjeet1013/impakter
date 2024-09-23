import React from "react";
import { countries } from "@/Data/Data";

const Country: React.FC = () => {
  return (
    <div className="px-4 py-12 flex justify-center w-full">
      {/* Header */}
      <div className="w-full max-w-[1400px]">
        <h2 className="text-[20px] md:text-[36px] text-[#000000CC] md:leading-[30px] font-bold mb-6 text-start">
          Find the ESG score of a company by their country of origin
        </h2>

        {/* Grid of countries and ESG scoring buttons */}
        <div className="flex justify-center">
          <div className="grid grid-cols-2  md:grid-cols-3 max-w-5xl lg:grid-cols-4 gap-6">
            {countries.map((country, index) => (
              <div key={index} className="flex justify-center items-center ">
                <span className="font-medium text-[20px] leading-[26px] rounded-lg border-blue-500 text-center border py-1 px-6 w-full max-w-md">
                  {country}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
