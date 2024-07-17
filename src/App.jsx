import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Aboutpage from "./pages/Aboutpage";
import DetailProject from "./pages/DetailProject";
import Contactpage from "./pages/Contactpage";

export const ThemeContext = createContext("light");

function App() {
  const [tema, settema] = useState("light");
  useEffect(() => {
    settema("light");
  }, []);

  return (
    <ThemeContext.Provider value={{ tema, settema }}>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/project/:id" element={<DetailProject />} />
        <Route path="/contact" element={<Contactpage />} />
      </Routes>
    </ThemeContext.Provider>
  );
}

export default App;
