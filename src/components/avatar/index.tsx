import Image from "next/image";
export default function Avatar() {
  return (
    <div className="bg-gradient-to-t from-secondary to-primary rounded-full w-52 lg:w-72 lg:h-72 overflow-hidden flex place-content-center place-items-end shadow-sm">
      <Image src="/images/avatar.png" alt="avatar" width={300} height={200} />
    </div>
  );
}
