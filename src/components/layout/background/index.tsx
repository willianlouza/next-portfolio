import { motion } from "framer-motion";

export default function Background() {
  return (
    <>
      <div className="absolute h-full w-full  top-0 left-0 -z-20 [filter:url(#gooey)]">
        <motion.div
          initial={{ translate: "0 0" }}
          animate={{ translate: "-200px -200px" }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-96 -right-16 md:right-72 m-auto h-40 w-40 rounded-full bg-indigo-600 bg-gradient-to-br from-indigo-600 to-purple-500 shadow-inner shadow-white"
        ></motion.div>
        <motion.div
          initial={{ translate: "0 0" }}
          animate={{ translate: "50px 50px" }}
          transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute top-60 -right-16 md:right-72 m-auto h-60 w-60 rounded-full bg-indigo-600 bg-gradient-to-br from-purple-500 to-pink-500 shadow-inner shadow-white"
        ></motion.div>
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
