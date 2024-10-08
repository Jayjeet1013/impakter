import React from "react";

const BookDemo = () => {
  return (
    <div className="bg-[#C0E2F8] py-12 md:py-20 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full space-y-8 text-center">
        <h2 className="mt-6 text-[24px] md:text-[56px] md:leading-[72px]  font-bold  ">
          Looking for an ESG solution for your business?
        </h2>
        <div className="mt-8 space-y-4  sm:space-y-0 sm:flex sm:justify-center sm:space-x-20">
          <button className="w-full text-[24px] hover:text-white hover:bg-[#446f8d] md:text-[28px] px-6 py-3 border-[#1192EF] border rounded-md bg-[#fff] leading-[36px] font-bold text-[#1192EF] sm:w-auto">
            Free ESG Rating
          </button>
          <button className="w-full  text-[24px] md:text-[28px] hover:bg-blue-900  px-10 py-3 border-[#1192EF] border rounded-md bg-[#1192EF] leading-[36px] font-medium text-[#fff] sm:w-auto">
            Book a Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
