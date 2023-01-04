import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import ButtonScrollTop from "../button/btn-scroll-top";
export default function Footer() {
  return (
    <footer className="relative flex pt-0.5 bg-gradient-to-r from-cyan-500 to-emerald-500">
      <ButtonScrollTop targetId="greet" position="bottom-16 right-5" />
      <div className="flex-1 bg-neutral-900 px-6 flex place-content-between place-items-center">
        <Image src="/images/name-white.png" alt="Logo" width={64} height={64} className="w-12" />
        <Link href="https://github.com/willianlouza" target="_blank">
          <BsGithub className="w-6 h-6" />
        </Link>
      </div>
    </footer>
  );
}
