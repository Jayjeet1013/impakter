import Link from "next/link";
import React, { useState } from "react";
import { IoCaretDownSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";

const Calculated = () => {
  const [companyName, setCompanyName] = useState("");
  const [country, setCountry] = useState("All Countries");
  const [industry, setIndustry] = useState("All Industries");
  const [rating, setRating] = useState("All Ratings");

  return (
    <div className="flex  flex-col justify-center text-[#000000CC] bg-[#F5F5F5] py-16 px-4 w-full">
      <div className="flex flex-col justify-center w-full mx-auto max-w-[1400px]   ">
        {/* Text Section */}
        <div className="flex bg-[#F5F5F5] pb-16 justify-center ">
          <div className="">
            <div className="max-w-[1230px]  text-center space-y-4">
              <h1 className="text-[20px] md:text-[36px] leading-[30px] font-bold">
                How is the ESG score calculated?
              </h1>

              <p className="md:text-[24px] md:px-4 font-normal md:leading-[30px]">
                ESG scores are typically calculated using a combination of
                quantitative and qualitative data. Quantitative data might
                include factors like greenhouse gas emissions, water usage,
                employee turnover, and board diversity. Qualitative data can be
                derived from company disclosures, news articles, and industry
                reports
              </p>
              <h4 className="md:text-[24px] font-normal md:leading-[30px]">
                It&apos;s worth noting that there&apos;s no one fixed way to
                calculate ESG score, but only right methodologies
              </h4>
              <div className="items-center flex justify-center ">
                <Link
                  href={"/"}
                  className="flex justify-center text-[20px] leading-[30px] font-normal w-[300px] items-center text-[#18A0FB] border-b border-[#18A0FB] "
                >
                  IMPAKTER INDEX Methodology <MdKeyboardArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Search Filters */}
        <div className="flex lg:flex-row flex-col w-full max-w-[1400px]">
          <div className="w-full border-4 border-[#18A0FB] flex flex-col md:flex-row items-center justify-center bg-white rounded-lg shadow-md">
            {/* Company Name Input */}
            <input
              type="text"
              placeholder="Company Name"
              className="px-4 py-4 w-full font-medium  lg:text-[24px] leading-[30px] placeholder-[#CCCCCC] md:w-auto flex-1 rounded-l-md border-r border-[#18A0FB] focus:outline-none"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            {/* Country Dropdown */}
            <div className="relative w-full md:w-auto flex-1">
              <select
                className="appearance-none px-4 font-normal  lg:text-[24px] leading-[30px] py-4 w-full bg-white border-r border-[#18A0FB] focus:outline-none"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option>All Countries</option>
                <option>USA</option>
                <option>Canada</option>
                <option>UK</option>
              </select>
              <IoCaretDownSharp className="absolute right-4 top-1/2 transform -translate-y-1/2  pointer-events-none" />
            </div>

            {/* Industry Dropdown */}
            <div className="relative w-full md:w-auto flex-1">
              <select
                className="appearance-none px-4  font-normal lg:text-[24px] leading-[30px] py-4 w-full bg-white border-r border-[#18A0FB] focus:outline-none"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option>All Industries</option>
                <option>Technology</option>
                <option>Finance</option>
                <option>Healthcare</option>
              </select>
              <IoCaretDownSharp className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none" />
            </div>

            {/* Rating Dropdown */}
            <div className="relative w-full md:w-auto flex-1">
              <select
                className="appearance-none px-4 py-4 w-full font-normal   lg:text-[24px] leading-[30px] bg-white border-r border-[#18A0FB] focus:outline-none"
                value={rating}
                onChange={(e) => setRating(e.target.value)}
              >
                <option>All Ratings</option>
                <option>5 Stars</option>
                <option>4 Stars</option>
                <option>3 Stars</option>
              </select>
              <IoCaretDownSharp className="absolute right-4 top-1/2 transform -translate-y-1/2  pointer-events-none" />
            </div>
          </div>

          {/* Search Button */}
          <button className="px-9 py-4 font-normal  text-[24px] leading-[30px] bg-blue-500 text-white rounded-md hover:bg-blue-600 w-full md:w-auto mt-4 lg:mt-0">
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculated;
