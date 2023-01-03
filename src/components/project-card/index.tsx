import Image from "next/image";
import ButtonProjectDemo from "../button/btn-project-demo";
import ButtonRepository from "../button/btn-repository";
import Tag from "../tag";
interface IProps {
  hasDemo: boolean;
  tags: string[];
  description: string;
  image: string;
  demoURL?: string;
  githubURL?: string;
}
export default function ProjectCard(props: IProps) {
  return (
    <div className="bg-gradient-to-r from-pink-600 to-purple-600 pt-0.5">
      <div className="group bg-neutral-900 p-4 flex flex-col gap-4">
        <div className="bg-black h-48 overflow-hidden">
          <Image
            src={props.image}
            alt="Project Image"
            width={500}
            height={500}
            className="h-full w-full group-hover:scale-125 transition-transform duration-500"
          />
        </div>
        <div className="flex flex-wrap">
          {props.tags.map((tag, index) => {
            return <Tag key={index} text={tag} className="mr-2" />;
          })}
        </div>
        <div className="text-start">
          <span className="text-xl">{props.description}</span>
        </div>
        <div className="flex w-full">
          <ButtonRepository text="GitHub" repoUrl={props.githubURL || ""} />
          {props.hasDemo && <ButtonProjectDemo className="mx-4" demoUrl={props.demoURL || ""} />}
        </div>
      </div>
    </div>
  );
}
