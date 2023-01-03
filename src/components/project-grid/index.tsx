import FadeContainer from "../base/fade-container";
import ProjectCard from "../project-card";
import React from "react";

interface IProps {
  children?: React.ReactNode;
}

export default function ProjectGrid(props: IProps) {
  return (
    <div className="flex flex-col lg:grid-cols-3 gap-6 lg:flex-row w-full">
      <FadeContainer direction="top" className="lg:w-96">
        <ProjectCard
          tags={["React", "Tailwind"]}
          hasDemo={true}
          description="Previsão do tempo usando a API Open Weather Map."
          image="/images/weather.png"
          githubURL="https://github.com/willianlouza/weather-app-react"
          demoURL="https://willianlouza.github.io/weather-app-react/"
        />
      </FadeContainer>
      <FadeContainer direction="top" className="lg:w-96" delay=".5s">
        <ProjectCard
          tags={["React", "Express", "Prisma"]}
          hasDemo={true}
          description="Projeto Blog feito com React, Tailwind e Express."
          image="/images/blog.png"
          githubURL="https://github.com/willianlouza/vite-blog"
          demoURL="https://willianlouza.github.io/vite-blog/"
        />
      </FadeContainer>
      <FadeContainer direction="top" className="lg:w-96" delay="1s">
        <ProjectCard
          tags={["React", "Express"]}
          hasDemo={false}
          description="Banco virtual em Docker feito com React e Express."
          image="/images/bank.png"
          githubURL="https://github.com/willianlouza/fullstack-app-bank"
        />
      </FadeContainer>
    </div>
  );
}
