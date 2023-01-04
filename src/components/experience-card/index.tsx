import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import { BiData } from "react-icons/bi";
interface IProps {
  role: "Frontend" | "Backend";
  stacks: string[];
}
export default function ExperienceCard(props: IProps) {
  return (
    <div className="pt-0.5 bg-gradient-to-r from-emerald-500 to-cyan-500 w-full shadow-lg">
      <div className="group bg-neutral-900 px-6 py-6 lg:py-12 flex flex-col gap-6">
        <div className="flex place-content-center place-items-center">
          <h3 className="text-primary text-xl font-bold relative lg:text-2xl">
            {props.role}
            {props.role === "Frontend" ? (
              <HiCode className="text-primary absolute -left-8 top-1 w-5 h-5" />
            ) : (
              <BiData className="text-primary mr-4 absolute -left-8 top-1 w-5 h-5" />
            )}
          </h3>
        </div>
        <div className="flex-1 flex place-content-center">
          <div className="grid grid-cols-2 gap-6">
            {props.stacks.map((stack, index) => {
              return (
                <div key={index} className="flex place-items-center">
                  <BsFillPatchCheckFill className="text-cyan-400 w-5 h-5" />
                  <span className="ml-4 text-md lg:text-2xl text-neutral-400 font-semibold">{stack}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
