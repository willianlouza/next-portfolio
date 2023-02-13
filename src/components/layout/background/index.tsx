import Image from "next/image";
export default function Background() {
  return (
    <>
      <div className="absolute -z-10 h-full w-full opacity-10">
        <Image
          className="w-full h-full object-fill"
          src="/images/noise.jpg"
          alt="noise-bg"
          width={1920}
          height={1080}
        />
      </div>
      <div className="fixed -z-50 h-full w-full opacity-10">
        <Image className="w-full h-full object-cover" src="/images/glow.jpg" alt="noise-bg" width={1920} height={1080} />
      </div>

      <div className="absolute h-full w-full  top-0 left-0 -z-20 [filter:url(#gooey)]">
        <div className="absolute top-96 -right-16 md:right-72 animate-move m-auto h-40 w-40 rounded-full bg-indigo-600 bg-gradient-to-br from-indigo-600 to-purple-500 shadow-inner shadow-white"></div>
        <div className="absolute top-60 -right-16 md:right-72  animate-movealt m-auto h-60 w-60 rounded-full bg-indigo-600 bg-gradient-to-br from-purple-500 to-pink-500 shadow-inner shadow-white"></div>
        <svg>
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="25" />
            <feColorMatrix
              values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  0 0 0 90 -25"
            />
          </filter>
        </svg>
      </div>
    </>
  );
}
