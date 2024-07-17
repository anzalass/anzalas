import { useContext, useState } from "react";
import Education from "../components/Education";
import Navbar from "../components/Navbar";
import Projects from "../components/Project";
import Tools from "../components/Tools";
import Exprerience from "../components/exprerience";
import { ThemeContext } from "../App";

export default function Aboutpage() {
  const { tema, settema } = useContext(ThemeContext);
  const [active, setactive] = useState(0);
  return (
    <>
      <Navbar />
      <div className="xl:w-[55%] lg:w-w-[60%] md:w-full w-full mx-auto">
        <div className=" mt-5 gap-2 mx-auto grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-3 grid-cols-2">
          <button
            onClick={() => setactive(0)}
            className={`${
              active === 0 && tema === "light" ? "bg-zinc-300" : ""
            } ${
              active === 0 && tema === "dark" ? "bg-red-900" : ""
            } px-2 text-sm py-2 border  `}
          >
            {" "}
            Tentang Saya 🧑‍🔧
          </button>

          <button
            onClick={() => setactive(2)}
            className={`${
              active === 2 && tema === "light" ? "bg-zinc-300" : ""
            } ${
              active === 2 && tema === "dark" ? "bg-red-900" : ""
            } px-2 text-sm py-2 border`}
          >
            {" "}
            Tools 🛠️
          </button>
          <button
            onClick={() => setactive(3)}
            className={`${
              active === 3 && tema === "light" ? "bg-zinc-300" : ""
            } ${
              active === 3 && tema === "dark" ? "bg-red-900" : ""
            } px-2 text-sm py-2 border`}
          >
            {" "}
            Exprerience 💼
          </button>
          <button
            onClick={() => setactive(4)}
            className={`${
              active === 4 && tema === "light" ? "bg-zinc-300" : ""
            } ${
              active === 4 && tema === "dark" ? "bg-red-900" : ""
            } px-2 text-sm py-2 border`}
          >
            {" "}
            Education 🎓
          </button>
          <button
            onClick={() => setactive(1)}
            className={`${
              active === 1 && tema === "light" ? "bg-zinc-300" : ""
            } ${
              active === 1 && tema === "dark" ? "bg-red-900" : ""
            } px-2 text-sm py-2 border`}
          >
            {" "}
            Project 💻
          </button>
        </div>
        <div className={`text-start ${active === 0 ? "block" : "hidden"}`}>
          <h1 className="text-xl font-noto font-medium mt-10 leading-4">
            Tentang Saya 🧑‍🔧
          </h1>
          <hr className="mt-2 h-3" />
          <p className="mt-5 font-noto text-[17px] font-[500] leading-7 ">
            Saya mempunyai pengalaman dalam pengembangan Backend, saya mempunyai
            keahlian dalam merancang, mengembangkan dan mengimplementasikan
            solusi perangkat lunak yang kuat. Saya juga ahli dalam pengembangan
            Frontend menggunakan React, menciptakan antarmuka pengguna yang
            intuitif dan pengalaman pengguna yang lancar. Saya telah
            berkontribusi pada proyek mulai dari konsep hingga implementasi,
            berkolaborasi dengan tim lintas fungsi, dan menerapkan praktik
            pengkodean terbaik dan prinsip arsitektur. Saya termotivasi untuk
            terus belajar dan mengikuti perkembangan teknologi terkini dan tren
            industri. Saya berkembang dalam lingkungan kerja dinamis yang
            mendorong inovasi dan kolaborasi, dan saya gembira dengan peluang
            baru untuk memecahkan tantangan dan memberikan dampak positif yang
            signifikan.
          </p>
        </div>
        <div className={`text-start ${active === 1 ? "block" : "hidden"}`}>
          <h1 className="text-xl font-noto font-medium mt-10 leading-4">
            Project 💻
          </h1>
          <hr className="mt-2 h-3" />
          <Projects />
        </div>
        <div className={`text-start ${active === 2 ? "block" : "hidden"}`}>
          <h1 className="text-xl font-noto font-medium mt-10 leading-4">
            Tools 🛠️
          </h1>
          <hr className="mt-2 h-3" />
          <Tools />
        </div>
        <div className={`text-start ${active === 3 ? "block" : "hidden"}`}>
          <h1 className="text-xl font-noto font-medium mt-10 leading-4">
            Exprerience 💼
          </h1>
          <hr className="mt-2 h-3" />
          <Exprerience />
        </div>
        <div className={`text-start ${active === 4 ? "block" : "hidden"}`}>
          <h1 className="text-xl font-noto font-medium mt-10 leading-4">
            Education 🎓
          </h1>
          <hr className="mt-2 h-3" />
          <Education />
        </div>
      </div>
    </>
  );
}
