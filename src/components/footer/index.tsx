import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import ButtonScrollTop from "../button/btn-scroll-top";
export default function Footer() {
  return (
    <footer className="bg-black/25 py-2 px-6 backdrop-blur-md border-t border-white/25 flex items-center justify-between">
      {/* <ButtonScrollTop targetId="greet" position="bottom-16 right-5" /> */}
      <Image src="/images/name-white.png" alt="Logo" width={64} height={64} className="w-12" />
      <Link href="https://github.com/willianlouza" target="_blank">
        <BsGithub className="w-6 h-6" />
      </Link>
    </footer>
  );
}
