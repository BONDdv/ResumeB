import Title from "./Title";
import ProjectsCard from "./ProjectsCard";
import { projectOne, projectThree, projectTwo } from "../assets";
import { FadeIn } from "./FadeIn";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-700"
    >
      <FadeIn>
        <div className="flex justify-center items-center text-center">
          <Title
            title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
            des="My Projects"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
          <ProjectsCard
            title="Landing Page Web"
            des="This project was developed using HTML, CSS, and JavaScript, structured as a single-page website. "
            src={projectOne}
            href="https://github.com/BONDdv/landing-Page.git"
          />
          <ProjectsCard
            title="Expense Tracker API"
            des="Expense Tracker API is a RESTful API designed to manage users' income and expenses. It supports adding, deleting, viewing summaries, and downloading Excel files. Users are required to register or log in before accessing the service."
            src={projectTwo}
            href="https://github.com/BONDdv/Expense-tracker.git"
          />
          <ProjectsCard
            title="ThinkBoard Web App"
            des="It is a full-stack web application developed using the MERN stack."
            src={projectThree}
            href="https://github.com/BONDdv/landing-Page.git"
            demo="#"
          />
        </div>
      </FadeIn>
    </section>
  );
};

export default Projects;
