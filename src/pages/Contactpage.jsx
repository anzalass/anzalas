import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ThemeContext } from "../App";
import { useContext } from "react";

export default function Contactpage() {
  const { tema, settema } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <hr className=" mx-auto mt-2 600px:w-[80%] 700px:w-[60%] 800px:w-[60%] 900px:w-[60%] w-full" />
      <div
        className={` mx-auto 500px:w-[80%] 600px:w-[80%] 700px:w-[60%] 800px:w-[60%] 900px:w-[60%] w-full`}
      >
        <div className="mt-10 text-start font-noto font-[500]">
          <p className="leading-8">
            Jika ada keperluan silahkan hubungi saya melalui{" "}
            <a
              href="mailto:anzalas.muhammad@gmail.com"
              className="text-gray-400 underline"
            >
              anzalas.muhammad@gmail.com
            </a>{" "}
            atau melalui no Whatsapp{" "}
            <a
              href="https://api.whatsapp.com/send/?phone=62859102604165&text&type=phone_number&app_absent=0"
              className="text-gray-400 underline"
            >
              +62859-1026-04165
            </a>
          </p>
        </div>
        <div className="block">
          <Link
            to={
              "https://api.whatsapp.com/send/?phone=62859102604165&text&type=phone_number&app_absent=0"
            }
          >
            <div className="flex">
              <img
                className="w-[40px] h-[40px] object-contain mt-5"
                src="/whatsapp.svg"
                alt=""
              />
              <p className="mt-7 ml-3 font-noto font-medium">Whatsapp</p>
            </div>
          </Link>
          <Link to={"https://www.instagram.com/anzalass/"}>
            <div className="flex">
              <img
                className="w-[40px] h-[40px] object-contain mt-5"
                src="/instagram.svg"
                alt=""
              />
              <p className="mt-7 ml-3 font-noto font-medium">Instagram</p>
            </div>
          </Link>
          <Link to={"https://github.com/anzalass"}>
            <div className="flex">
              <img
                className="w-[40px] h-[40px] object-contain mt-5"
                src="/github.svg"
                alt=""
              />
              <p className="mt-7 ml-3 font-noto font-medium">Github</p>
            </div>
          </Link>
          <Link to={"https://www.linkedin.com/in/muhamadgemparanzalas/"}>
            <div className="flex">
              <img
                className="w-[40px] h-[40px] object-contain mt-5"
                src="/Linkedin.png"
                alt=""
              />
              <p className="mt-7 ml-3 font-noto font-medium">Linkedln</p>
            </div>
          </Link>
        </div>
        {/* <form className="w-full mx-auto mt-10">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Name
            </label>
            <input
              type="email"
              id="email"
              className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              placeholder="nama"
              required
            />
          </div>
          <div className="">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white mt-5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Register new account
          </button>
        </form> */}
      </div>
    </>
  );
}
