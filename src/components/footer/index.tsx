import FooterTitle from "../footer-title";

export default function Footer() {
  return (
    <footer className="z-10 px-4 lg:px-9 flex place-items-end text-left py-6 lg:py-4 relative h-40  mt-12">
      <div>
        <div className="animate-wave-1 bg-link rounded-wave w-[200%] h-28 lg;h-32 absolute bottom-0 left-0  -z-10"></div>
        <div className="animate-wave-2 bg-link/25 rounded-wave w-[200%] h-28 lg:h-32 absolute bottom-2 lg:bottom-0 left-0 -z-20"></div>
        <div className="animate-wave-3 bg-link/25 rounded-wave w-[200%] h-28 lg:h-32 absolute bottom-4 left-0 -z-30"></div>
      </div>
      <FooterTitle />
    </footer>
  );
}
