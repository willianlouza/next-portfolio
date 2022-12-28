import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (theme !== undefined) setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <div
      className="cursor-pointer mx-6 w-6 h-6 flex place-content-center place-items-center"
      onClick={() => {
        setTheme(theme === "dark" ? "light" : "dark");
      }}
    >
      {theme === "dark" ? (
        <BsFillSunFill className="w-full h-full text-light" />
      ) : (
        <BsFillMoonStarsFill className="w-full h-full text-dark" />
      )}
    </div>
  );
}
