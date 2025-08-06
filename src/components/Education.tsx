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
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="electrical engineering"
            subTitle="prince of songkla university (2018 - 2022)"
            result="2.55/4"
            des="During this time, I have also been involved in small-scale projects related to IoT and electrical systems, including coding to control electrical devices. These experiences have helped me strengthen my understanding of how software can interact with hardware in practical applications."
          />
           <ResumeCard
            title="Full Stack code camp"
            subTitle="relearn solution (July 2024 – December 2024)"
            result="Done with Project"
            des="During this period, I practiced both frontend and backend development, primarily using React.js and Node.js, and worked on real projects collaboratively with classmates."
          />
        </div>
      </div>     
    </motion.div>
  );
};

export default Education;
