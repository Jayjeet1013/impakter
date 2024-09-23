import { allcountry } from "@/Data/Data";
import React from "react";

const ListofCountry = () => {
  return (
    <div className="px-4 py-12 flex justify-center w-full">
      {/* Header */}
      <div className="w-full max-w-[1400px]">
        <h2 className="text-[20px] md:text-[24px] text-[#000000CC] md:leading-[30px] font-normal  mb-6 text-center">
          A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
        </h2>

        {/* Grid of countries and ESG scoring buttons */}
        <div className="flex justify-center ">
          <div className="flex flex-col  gap-12">
            {allcountry.map((group) => (
              <div key={group.id}>
                <h2 className="text-[24px] text-[#000000CC] md:text-[36px] leading-[30px] font-bold mb-4">
                  {group.alphabet}
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5  xl:grid-cols-6 gap-4">
                  {group.country.map((country, index) => (
                    <div
                      key={index}
                      className="flex justify-center items-center "
                    >
                      <span className="font-medium text-[20px] hover:text-white hover:bg-blue-500 cursor-pointer leading-[26px] rounded-md border-blue-500 text-center border py-1 px-6 w-full max-w-md">
                        {country}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListofCountry;
