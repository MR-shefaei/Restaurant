import Link from "next/link";
import { useState } from "react";
import AboutUs from "./aboutus";

const nav =[
  {
    name:"Restaurants",
    href:"/"
  },
  {
    name:"AboutUs",
    href:"/about"
  }
]

export default function Header() {


  const [useStyle, setStyle] = useState(1);

  function eventHandler(e) {
    setStyle(e);

  }

  return (
    <>
      <div className="bg-[#FFFCFA] flex justify-center  p-8  font-semibold ">
        <Link href="/">
          <a
            onClick={() => eventHandler(1)}
            className={`mx-28  text-gray-300 ${useStyle === 1
                ? "  underline decoration-2 underline-offset-[38px] decoration-pink-300 decoration-solid text-indigo-900"
                : "hover:underline decoration-2 underline-offset-[38px] decoration-pink-300 decoration-solid"
              } `}
            href="#"
          >
            Restaurant
          </a>
        </Link>
        <Link href="/about.js">
          <a
            onClick={() => eventHandler(2)}

            className={`mx-28 hover:text-indigo-900 text-gray-300 ${useStyle === 2
                ? "  underline decoration-2 underline-offset-[38px] decoration-pink-300 decoration-solid text-indigo-900"
                : "hover:underline decoration-2 underline-offset-[38px] decoration-pink-300 decoration-solid"
              }`}
            href="#"
          >
            About Us
          </a>
        </Link>
      </div>
    </>
  );
}
