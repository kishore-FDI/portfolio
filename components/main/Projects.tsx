import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/proj1.jpeg"
          title="Medical Chat-site"
          description="A simple Website to post your medical quries"
        />
        <ProjectCard
          src="/Screenshot (159).png"
          title="Moblie AI-chat app"
          description="A simple user friendly app which allows them to use any customized AI that they wanna chat with."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Portfolio"
          description="A space themed portfolio website "
        />
      </div>
    </div>
  );
};

export default Projects;
