import Image from "next/image";
export default function StackIcons() {
  return (
    <div className="flex gap-2 justify-center lg:justify-start lg:gap-4">
      <Image src="/images/React.png" alt="React Logo" width="512" height="512" className="w-6 h-6 lg:w-9 lg:h-9" />
      <Image src="/images/tailwind.png" alt="Tailwind Logo" width="512" height="512" className="w-6 h-6 lg:w-9 lg:h-9" />
      <Image src="/images/Node.png" alt="Node Logo" width="512" height="512" className="w-6 h-6 lg:w-9 lg:h-9" />
      <Image src="/images/Unity.png" alt="Unity Logo" width="512" height="512" className="w-6 h-6 lg:w-9 lg:h-9" />
    </div>
  );
}
