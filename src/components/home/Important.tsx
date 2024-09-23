import Image from "next/image";
import React from "react";

const Important: React.FC = () => {
  return (
    <div className="flex flex-col items-center text-[#000000CC] justify-center">
      <section className="my-16 max-w-[1240px] w-full px-4">
        <div className="text-center mb-8">
          <h2 className="text-[24px] md:text-[36px] leading-[30px] font-bold">
            Why ESG Index is important?
          </h2>
          <p className=" text-[18px]  md:text-[24px] leading-[30px] md:leading-[30px] font-normal py-6  mx-auto">
            ESG indexes are crucial because they provide a standardized way to
            measure and track the sustainability performance of companies, and
            thus help all stakeholders identify those ones with overall positive
            impact.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between  gap-12  mt-10">
          {/* For Consumers */}
          <div className="flex flex-col  max-w-[460px]">
            <h3 className="font-bold pl-16 text-[24px]  md:text-[28px] py-4">
              For Consumers
            </h3>
            <div className="md:w-[360px] md:h-[210px] mb-4">
              <Image
                alt="For Consumers"
                width={360}
                height={210}
                src="/consumer.jpg"
                className="bg-cover w-full md:w-[360px] md:h-[210px] "
              />
            </div>
            <p className="font-bold text-[16px] md:leading-[30px] md:text-[20px]  mt-3">
              Buy product & services from companies with strong sustainability
              values & practices.
            </p>
            <ul className="list-disc list-inside text-[16px] md:text-[18px]  mt-3">
              <li>Assess the environmental impact of each purchase</li>
              <li>Supporting sustainable European businesses</li>
              <li>Advocating for corporate accountability</li>
            </ul>

            <button className="mt-4 hover:text-white hover:bg-blue-500 text-blue-500 border font-medium text-[15px] leading-[20px] border-blue-500 px-6 py-2 rounded self-start">
              Learn More
            </button>
          </div>

          {/* For Businesses */}
          <div className="flex flex-col  max-w-[460px]">
            <h3 className="font-bold text-[24px] pl-16 md:text-[28px] py-4">
              For Businesses
            </h3>
            <div className="md:w-[360px] md:h-[210px] mb-4">
              <Image
                alt="For Businesses"
                width={360}
                height={210}
                src="/business.png"
                className="bg-cover w-full md:w-[360px] md:h-[210px] "
              />
            </div>
            <p className="font-bold text-[16px]  md:leading-[30px] md:text-[20px]  mt-3">
              Improve internal efficiency and branding to gain a competitive
              edge.
            </p>
            <ul className="list-disc list-inside text-[16px] md:text-[18px]  mt-3">
              <li>Attract ESG conscious consumers & investors</li>
              <li>Compliance with European Regulations</li>
              <li>Auditing loopholes for risk reduction</li>
            </ul>

            <button className="mt-4 hover:text-white hover:bg-blue-500 text-blue-500 border font-medium text-[15px] leading-[20px] border-blue-500 px-6 py-2 rounded self-start">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Important;
