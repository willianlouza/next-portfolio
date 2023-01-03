import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
interface IProps {
  className?: string;
}
export default function Navbar(props: IProps) {
  return (
    <div className={`${props.className} absolute top-0 left-0 w-full flex justify-between place-items-center`}>
      <Image src="/images/name-white.png" alt="logo" width="500" height="500" className="w-14" />
      <Link href="https://github.com/willianlouza" target="_blank">
        <BsGithub className="w-8 h-8" />
      </Link>
    </div>
  );
}
