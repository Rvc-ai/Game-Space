import React, { useEffect, useState } from "react";
import logo from "./../assets/Images/logo.png";
import { HiMagnifyingGlass, HiMiniMoon, HiSun } from "react-icons/hi2";
import { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  const {theme, setTheme} = useContext(ThemeContext)

  useEffect(() => {
    console.log("theme", theme)
  }, [theme])
  
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} alt="" />
      <div className="flex bg-slate-200 p-2 w-full items-center mx-5 rounded-full">
        <HiMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent outline-none px-2"
        />
      </div>
      <div>
        {theme=="light" ? (
          <HiMiniMoon
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme("dark"); localStorage.setItem('theme', 'dark')}}
          />
        ) : (
          <HiSun
            className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
            onClick={() => {setTheme("light");localStorage.setItem('theme', 'light')}}
          />
        )}
      </div>
    </div>
  );
};

export default Header;
