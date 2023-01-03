import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="flex pt-0.5 bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500">
      <div className="flex-1 bg-neutral-900 px-6 flex place-content-between place-items-center">
        <Image src="/images/name-white.png" alt="Logo" width={500} height={500} className="w-16" />
        <Link href="https://github.com/willianlouza" target="_blank">
          <BsGithub className="w-8 h-8" />
        </Link>
      </div>
    </footer>
  );
}
