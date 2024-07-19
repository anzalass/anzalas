import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../App";
import { Quotess } from "../components/quotes";

const useTypewriter = ({ words, loop, typeSpeed, deleteSpeed }) => {
  const [index, setIndex] = useState(Math.floor(Math.random() * 101));
  const [subIndex, setSubIndex] = useState(0);
  const [forward, setForward] = useState(true);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        if (forward) {
          if (subIndex < words[index].length) {
            setText(words[index].substring(0, subIndex + 1));
            setSubIndex(subIndex + 1);
          } else if (loop) {
            setForward(false);
          }
        } else {
          if (subIndex > 0) {
            setText(words[index].substring(0, subIndex - 1));
            setSubIndex(subIndex - 1);
          } else {
            setForward(true);
            setIndex((index + 1) % words.length);
          }
        }
      },
      forward ? typeSpeed : deleteSpeed
    );

    return () => clearTimeout(timeout);
  }, [subIndex, forward, words, index, typeSpeed, deleteSpeed, loop]);

  return { text };
};

export default function Homepage() {
  const { tema, settema } = useContext(ThemeContext);

  // setTimeout(() => {
  //   setquote(Quotess[indexquote]);
  //   setindexquote(indexquote + 1);
  //   if (indexquote >= Quotess.length) {
  //     setindexquote(0);
  //   }
  // }, 3000);

  const { text } = useTypewriter({
    words: Quotess,
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 20,
  });

  return (
    <>
      <Navbar utama={"utama"} />
      <hr className=" mx-auto mt-2 600px:w-[80%] 700px:w-[60%] 800px:w-[60%] 900px:w-[60%] w-full" />
      <div
        className={` mx-auto 500px:w-[80%] 600px:w-[80%] 700px:w-[60%] 800px:w-[60%] 900px:w-[60%] w-full`}
      >
        <div className="mt-5 w-full text-start">
          <div className="">
            <img
              src="https://cdn.dribbble.com/users/1098837/screenshots/3843460/hellowdribbble.gif"
              alt=""
              className="h-[160px] object-cover w-full rounded-md"
            />
          </div>
          <h1 className="font-inter mt-4 font-[700] 800px:text-2xl text-[16px]">
            Saya Muhamad Gempar Anzalas 👋
          </h1>
          <p
            className={`font-noto font-medium text-sm ${
              tema == "light" ? " text-zinc-500" : ""
            }`}
          >
            Software Engineer
          </p>
          <div className="my-auto text-start mt-1 font-noto font-medium">
            <h1>Tangerang, Banten📍</h1>
          </div>

          <div className="xl:flex lg:block md:block block gap-1 w-full mx-auto">
            <div className="xl:w-[50%] lg:w-[50%] ">
              {/* <img
                src="/saya.png"
                className="bg-white  w-[255px] mt-5 h-[255px] object-contain o rounded-md"
                alt=""
              /> */}
            </div>
            <div className="xl:w-[70%]  xl:my-auto lg:my-auto mt-3 ">
              <h1 className="">
                <span className="underline italic">For You</span> <span>🫵</span>
              </h1>
              <h1
                className={` mt1 font-noto text-[17px] font-[500] leading-7  italic  ${
                  tema == "light" ? " text-zinc-800" : ""
                } `}
              >
                {/* Pekerjaanmu akan mengisi sebagian besar hidupmu, dan
                satu-satunya cara untuk benar-benar puas adalah melakukan
                pekerjaan yang menurutmu hebat. Dan satu-satunya cara untuk
                melakukan pekerjaan hebat adalah dengan mencintai apa yang kamu
                lakukan -Steve Jobs */}
                {text}
                {/* {indexquote === 0 ? Quotess[0] : quote} */}
              </h1>
            </div>
          </div>

          <Link to={"/about"}>
            <button className="px-3 py-2 font-noto font-medium text-[14px] text-gray-500 rounded-sm mt-7 bg-zinc-200">
              Selengkapnya
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
