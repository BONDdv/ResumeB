import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-5 lgl:gap-10"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold">Work Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="software developer"
            subTitle="proalpha solutions (thailand) co. ltd (Mar – Jul 2024)"
            result="Voluntary resignation"
            des="During this period, I gained experience in ERP software development using Progress 4GL, customized to fit the company's internal systems. However, the entire frontend and backend architecture was fixed and did not allow for creating or designing new systems. As my goal is to work on innovative UI and system design, I decided to resign voluntarily to pursue opportunities more aligned with my interests."
          />
          
        </div>
      </div>     
    </motion.div>
  );
};

export default Education;
