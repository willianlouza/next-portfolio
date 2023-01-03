import Image from "next/image";
export default function Avatar() {
  return (
    <div className="bg-gradient-to-t from-purple-600 to-rose-500 rounded-full w-52 h-52 lg:w-72 lg:h-72 overflow-hidden flex place-content-center place-items-end shadow-sm">
      <Image src="/images/avatar.png" alt="avatar" width={597} height={597} className="scale-150 translate-y-12"/>
    </div>
  );
}
