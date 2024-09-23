import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const Faqs = () => {
  return (
    <div className="bg-[#F5F5F5] text-[#000000CC]">
      <div className="max-w-7xl mx-auto py-10   px-4 ">
        <h1 className=" text-[24px] md:text-[36px] mb-6 leading-[30px] font-bold text-center ">
          FAQs on ESG, Sustainability & CSRD
        </h1>
        <div className="space-y-4 ">
          <Accordion className="border-[1px] rounded-[4px] border-[#A0A7AD] ">
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="text-[16px] md:text-[20px] leding-[20px] font-bold ">
                What is ESG Rating?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="font-normal -mt-6 text-[16px] md:text-[20px] md:leading-[30px] ">
                ESG rating is a score given to a company based on its
                performance in three key areas: Environmental, Social, and
                Governance. It evaluates how well a company manages its
                environmental impact, social responsibilities, and corporate
                governance practices.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border-[1px] rounded-[4px] border-[#A0A7AD] ">
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="text-[16px] md:text-[20px] leding-[20px] font-bold ">
                What does ESG stand for in ESG ratings?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="font-normal -mt-6 md:text-[20px] md:leading-[30px] ">
                ESG stands for Environmental, Social, and Governance. These
                three areas are used to assess a company's impact on the
                environment, its treatment of employees and communities, and the
                quality of its leadership and governance practices.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border-[1px] rounded-[4px] border-[#A0A7AD] ">
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="text-[16px] md:text-[20px] leding-[20px] font-bold ">
                How is an ESG rating calculated?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="font-normal -mt-6 md:text-[20px] md:leading-[30px] ">
                ESG ratings are calculated based on a company's performance in
                the areas of environmental impact, social responsibility, and
                corporate governance. Data is collected on factors such as
                carbon emissions, labor practices, diversity, board
                independence, and transparency.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border-[1px] rounded-[4px] border-[#A0A7AD] ">
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="text-[16px] md:text-[20px] leding-[20px] font-bold ">
                Why is an ESG rating important for companies?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="font-normal -mt-6 md:text-[20px] md:leading-[30px] ">
                An ESG rating is important because it helps investors,
                customers, and stakeholders understand how a company is managing
                risks and opportunities related to sustainability and ethical
                practices. A strong ESG rating can attract more investment and
                improve a company&apos;s reputation.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border-[1px] rounded-[4px] border-[#A0A7AD] ">
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="text-[16px] md:text-[20px] leding-[20px] font-bold ">
                How do ESG ratings affect investment decisions?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="font-normal -mt-6 md:text-[20px] md:leading-[30px] ">
                Investors use ESG ratings to evaluate companies' sustainability
                practices, which helps them make informed decisions about where
                to allocate funds. Companies with higher ESG ratings are often
                seen as less risky and more sustainable in the long term.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="border-[1px] rounded-[4px] border-[#A0A7AD] ">
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <Typography className="text-[16px] md:text-[20px] leding-[20px] font-bold ">
                Can ESG ratings change over time?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography className="font-normal -mt-6 md:text-[20px] md:leading-[30px] ">
                Yes, ESG ratings can change over time as companies improve or
                worsen in their environmental, social, and governance practices.
                Regular assessments are conducted to reflect current performance
                and any changes in policies or operations.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
