import Image from "next/image";
import React from "react";

type ScoreProps = {
  grade: string;
  title: string;
  description: string;
};

const scores: ScoreProps[] = [
  { grade: "A", title: "Excellent", description: "Industry Leader" },
  { grade: "B", title: "Good", description: "Above Average" },
  { grade: "C", title: "Satisfactory", description: "Meeting Expectations" },
  { grade: "D", title: "Poor", description: "Below Expectations" },
  { grade: "F", title: "Fail", description: "No Initiatives" },
];

const Result: React.FC = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="flex flex-col w-full px-4 max-w-[1400px]">
        <h1 className="text-[24px] md:text-[36px] font-bold leading-[30px] mb-14 text-start">
          Browse the companies by their ESG score
        </h1>

        {/* Score Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {scores.map((score) => (
            <div key={score.grade} className="flex flex-col items-center">
              {/* Grade Circle with Image Background */}
              <div className="relative  ">
                <Image
                  src={"/Ellipse.svg"}
                  alt="BgImage"
                  height={179}
                  width={179}
                  className="rounded-full bg-cover bg-center"
                />
                <span className="absolute inset-0 flex items-center justify-center text-[32px] md:text-[64px] font-bold text-black">
                  {score.grade}
                </span>
              </div>

              {/* Title and Description */}
              <h3 className="mt-4 md:mt-8 text-[18px] md:text-[24px] leading-[30px] font-normal text-[#000000CC] text-center">
                {score.title}
              </h3>
              <p className="text-[16px] md:text-[20px] leading-[30px] font-normal text-[#000000CC] text-center">
                ({score.description})
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
