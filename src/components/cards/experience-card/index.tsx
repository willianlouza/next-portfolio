import { BsFillPatchCheckFill } from "react-icons/bs";
import { HiCode } from "react-icons/hi";
import { BiData } from "react-icons/bi";
interface IProps {
  role: "Frontend" | "Backend";
  stacks: string[];
}
export default function ExperienceCard(props: IProps) {
  return (
    <div className="group bg-black/25 rounded-lg backdrop-blur-md border drop-shadow-lg border-white/25 p-8 md:p-16 flex flex-col gap-2">
      <div className="after:block after:w-full after:h-0.5 after:bg-white/10 after:my-4">
        <div className="flex place-content-center place-items-center">
          <h3 className="text-violet-500 text-xl font-bold relative lg:text-3xl">
            {props.role}
            {props.role === "Frontend" ? (
              <HiCode className="text-primary absolute -left-8 md:-left-10 top-1 w-5 h-5 md:w-7 md:h-7" />
            ) : (
              <BiData className="text-primary absolute -left-8 md:-left-10 top-1 w-5 h-5 md:w-7 md:h-7" />
            )}
          </h3>
        </div>
      </div>

      <div className="flex-1 flex place-content-center">
        <div className="grid grid-cols-2 gap-6">
          {props.stacks.map((stack, index) => {
            return (
              <div key={index} className="flex place-items-center">
                <div className="w-5 h-5">
                  <BsFillPatchCheckFill className="text-violet-400 w-5 h-5" />
                </div>
                <span className="ml-4 text-md md:text-2xl text-neutral-400 font-semibold">{stack}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
