import Link from "next/link";
import { useState } from "react";

export default function Header() {

  const [useStyle, setStyle] = useState('/');

  function eventHandler(e) {
    setStyle(e);

  }

  return (
    <>
      <div className="bg-[#FFFCFA] flex justify-center  p-8  font-semibold ">
        <Link href="/">
          <a
            onClick={() => eventHandler('/')}
            className={`mx-28  text-gray-300 ${useStyle === '/'
              ? "  underline decoration-2 underline-offset-[38px] decoration-pink-300 decoration-solid text-indigo-900"
              : "hover:underline decoration-2 underline-offset-[38px] decoration-pink-300 decoration-solid"
              } `}
            href="#"
          >
            Restaurant
          </a>
        </Link>
        <Link href="/about">
          <a
            onClick={() => eventHandler('/about')}

            className={`mx-28 hover:text-indigo-900 text-gray-300 ${useStyle === '/about'
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
