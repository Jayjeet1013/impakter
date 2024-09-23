import Image from "next/image";
import Link from "next/link";
import React from "react";

const Certificate: React.FC = () => {
  const imageSrcs = Array(8).fill("/certificate.png");

  return (
    <div className="flex justify-center bg-[#F5F5F5] py-12 px-4">
      <div className="max-w-[1400px] w-full flex flex-col px-4 ">
        <h2 className="text-[24px] md:text-[36px] font-bold text-[#000000CC] leading-[30px] text-start mb-10">
          See if a company has a popular ESG Certificate
        </h2>

        {/* Grid of Certificates */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 w-full justify-items-center">
          {imageSrcs.map((src, idx) => (
            <Image
              key={idx}
              src={src}
              alt={`certificate image ${idx + 1}`}
              width={136}
              height={136}
              className="w-32 h-32 object-cover"
            />
          ))}
        </div>
        <div className="items-center flex justify-center mt-8 ">
          <Link
            href={"/"}
            className="flex justify-center text-[20px] leading-[30px] font-normal  w-[230px] items-center text-[#18A0FB] border-b border-[#18A0FB] "
          >
            View all the Certificates
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
