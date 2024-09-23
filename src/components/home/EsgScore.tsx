import Image from "next/image";
import React from "react";

const EsgScore: React.FC = () => {
  const images = [
    { id: 1, image: "/Ellipse.png", name: "oneimage" },
    { id: 2, image: "/Ellipse.png", name: "twoimage" },
    { id: 3, image: "/Ellipse.png", name: "twoimage" },
    { id: 4, image: "/Ellipse.png", name: "twoimage" },
    { id: 5, image: "/Ellipse.png", name: "twoimage" },
  ];

  return (
    <div className="flex flex-col ">
      <div className="flex justify-center px-4 ">
        <div className="flex justify-between w-full px-4 max-w-[1400px]  py-8 ">
          {images.map((img) => (
            <Image
              key={img.id}
              src={img.image}
              alt="image"
              width={68}
              height={60}
              className=" w-[34px] h-[30px] md:w-[68px] md:h-[60px]  "
            />
          ))}
        </div>
      </div>
      {/* Text Section */}
      <div className="flex bg-[#F5F5F5] text-[#000000CC] px-4  py-14 justify-center ">
        <div className="">
          <div className="max-w-[1230px]  text-center space-y-4">
            <h1 className="text-[24px] md:text-[36px] leading-[30px] font-bold">
              How to find the ESG score of a company?
            </h1>
            <h4 className=" md:text-[24px] font-normal md:leading-[30px]">
              Use the Free ESG Score search widget of IMPAKTER INDEX.
            </h4>
            <p className=" md:text-[24px] font-normal   md:leading-[30px]">
              Frankly, finding a company&apos;s ESG score can be tricky and
              time-consuming because one needs to factor in various reports,
              data, and legal obligations. With IMPAKTER INDEX, our
              sustainability experts have done this for 1000s of European
              companies - across industries - for anyone to view their favorite
              brand&apos;s sustainability performance; and compare it with
              alternative brands to make an informed purchase decision.
            </p>
            <h4 className=" md:text-[24px] font-normal   md:leading-[30px]">
              Completely FREE!
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EsgScore;
