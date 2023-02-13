import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
interface IProps {
  className?: string;
}
export default function Navbar(props: IProps) {
  return (
    <div className={`${props.className} z-50 bg-black/25 border-b border-white/25 backdrop-blur-md fixed top-0 left-0 w-full flex justify-between place-items-center`}>
      <Image src="/images/name-white.png" alt="logo" width="500" height="500" className="w-10 lg:w-14" />
      <Link href="https://github.com/willianlouza" target="_blank" className="z-10">
        <BsGithub className="w-6 h-6 lg:w-8 lg:h-8" />
      </Link>
    </div>
  );
}
