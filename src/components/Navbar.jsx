import { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../App";

export default function Navbar({ utama }) {
  const setRootCssVariable = (variable, value) => {
    document.documentElement.style.setProperty(variable, value);
  };

  const { tema, settema } = useContext(ThemeContext);

  const handleBgColorChange = (event) => {
    setRootCssVariable("--main-bg-color", "#fff");
    setRootCssVariable("--main-text-color", "black");
    settema("light");
  };
  const handleBgColorChange2 = (event) => {
    setRootCssVariable("--main-bg-color", "#212121");
    setRootCssVariable("--main-text-color", "white");
    settema("dark");
  };

  return (
    <nav className="w-full mx-auto">
      <div className=" 600px:w-[80%] 700px:w-[60%] 800px:w-[60%] 900px:w-[60%] w-full flex justify-between mx-auto">
        <section>
          <Link to={"/"} className="flex">
            <img
              src="/Narutowebp.webp"
              className="w-[30px] rounded-full h-[30px]"
              alt=""
            />
            <h1 className="font-noto ml-2 text-start font-[600] text-[19px] leading-[28px] ">
              {utama === "utama" ? "Anzalas" : "Anzalas"}
            </h1>
          </Link>
        </section>
        <section className="flex 700px:gap-7 gap-3 font-noto font-[600] 600px:text-[16px] text-sm leading-[28px]  ">
          <Link to={"/about"}>
            <h1>About</h1>
          </Link>
          <Link to={"/contact"}>
            <h1>Contact</h1>
          </Link>
          {tema === "dark" ? (
            <h1 className="cursor-pointer" onClick={handleBgColorChange}>
              ⛅
            </h1>
          ) : (
            <h1 className="cursor-pointer" onClick={handleBgColorChange2}>
              🌙
            </h1>
          )}
        </section>
      </div>
    </nav>
  );
}
