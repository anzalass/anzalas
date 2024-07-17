import React, { useContext } from "react";
import { toolss } from "./listtools";
import { ThemeContext } from "../App";

export default function Tools() {
  const { tema } = useContext(ThemeContext);
  return (
    <div
      className={`grid grid-cols-5 gap-3 mt-7  bg-white p-2 rounded-md mx-auto`}
    >
      {toolss.map((d, i) => (
        <div className="mx-auto" key={i}>
          <img src={d.img} className={d.classname} alt="" />
        </div>
      ))}
    </div>
  );
}
