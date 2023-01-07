import ProjectCard from "../project-card";
import React from "react";
import { motion } from "framer-motion";
interface IProps {
  children?: React.ReactNode;
}

export default function ProjectGrid(props: IProps) {
  return (
    <div className="flex flex-col lg:grid-cols-3 gap-6 lg:flex-row w-full">
      <motion.div
        initial={{ opacity: 0, translateY: "3rem" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="lg:w-96"
      >
        <ProjectCard
          tags={["React", "Tailwind"]}
          hasDemo={true}
          description="Previsão do tempo usando a API Open Weather Map."
          image="/images/weather.png"
          githubURL="https://github.com/willianlouza/weather-app-react"
          demoURL="https://willianlouza.github.io/weather-app-react/"
        />
      </motion.div>
      <motion.div
         initial={{ opacity: 0, translateY: "3rem" }}
         whileInView={{ opacity: 1, translateY: 0 }}
         viewport={{ once: true, amount: 0.2 }}
         transition={{ duration: 1 }}
        className="lg:w-96"
      >
        <ProjectCard
          tags={["React", "Express", "Prisma"]}
          hasDemo={true}
          description="Projeto Blog feito com React, Tailwind e Express."
          image="/images/blog.png"
          githubURL="https://github.com/willianlouza/vite-blog"
          demoURL="https://willianlouza.github.io/vite-blog/"
        />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, translateY: "3rem" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1 }}
        className="lg:w-96"
      >
        <ProjectCard
          tags={["Next", "Tailwind", "React"]}
          hasDemo
          description="Web Site moderno de Coffee Shop com Next JS."
          image="/images/coffee-shop.jpg"
          githubURL="https://github.com/willianlouza/next-coffee-shop"
          demoURL="https://coffee-shop-gebp9oq8e-willianlouza.vercel.app/"
        />
      </motion.div>
    </div>
  );
}
