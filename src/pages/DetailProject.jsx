import { useParams } from "react-router-dom";
import { listproject } from "../components/Listproject";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";

export default function DetailProject() {
  const { id } = useParams();
  const [iframe, setiframe] = useState("");
  const [seemore, setseemore] = useState(false);
  const FindByname = () => {
    const res = listproject.find((item) => item.byname === id);
    setiframe(res);
  };
  useEffect(() => {
    FindByname();
    console.log("asas", iframe);
  }, [id]);
  return (
    <>
      <Navbar />
      <hr className=" mx-auto mt-2 600px:w-[80%] 700px:w-[60%] 800px:w-[60%] 900px:w-[60%] w-full" />
      <div
        className={` mx-auto 500px:w-[80%] 600px:w-[80%] 700px:w-[60%] 800px:w-[60%] 900px:w-[60%] w-full`}
      >
        <div className="w-full absolute top-0 left-0 overflow-y-auto">
          {seemore &&
            iframe?.img?.map((d, i) => (
              <div className="overflow-y-auto " key={i}>
                <img src={d} alt="" />
              </div>
            ))}
          {iframe.img ? (
            <button className="border p-2" onClick={() => setseemore(!seemore)}>
              close
            </button>
          ) : null}
        </div>
        {/* <div className="flex gap-2 text-sm">
          <h1 className="text-start mt-5 font-noto font-medium">about</h1>
          <h1 className="text-start mt-5 font-noto font-medium"> / </h1>
          <h1 className="text-start mt-5 font-noto font-medium">detail</h1>
        </div> */}
        <div className="mx-auto w-full ">
          {iframe.ppt !== "" ? (
            <iframe
              src={iframe.ppt}
              // frameborder="0"

              className="mx-auto mt-5 w-full"
              height="400"
              allowfullscreen="true"
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
            ></iframe>
          ) : (
            <div className="w-full mt-4">
              {iframe.img.length > 0 && !seemore ? (
                <div className="w-full flex gap-2 relative">
                  <div className=" w-[70%]">
                    <img src={iframe.img[0]} alt="" />
                  </div>
                  <div className=" w-[30%] gap-2 my-auto">
                    <img src={iframe.img[1]} alt="" className="h-full" />
                    <img src={iframe.img[2]} alt="" className="h-full" />
                  </div>
                </div>
              ) : null}
              <button
                className="px-2 py-2 border border-black mt-2"
                onClick={() => setseemore(!seemore)}
              >
                Seemore
              </button>
            </div>
          )}
        </div>
        <div className="">
          <h1 className="mt-4 font-noto font-medium text-start">
            {iframe.name}
          </h1>
          <p className="text-start mt-2">{iframe.latar}</p>
        </div>
      </div>
    </>
  );
}
