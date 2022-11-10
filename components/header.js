import { useState } from "react";

export default function Header() {
  const [useStyle, setStyle] = useState(0);

  function eventHandler() {
    setStyle(1);
  }

  return (
    <>
      <div className="bg-[#FFFCFA] flex justify-center  p-8   font-semibold ">
        <a
          onClick={() => eventHandler()}
          className={`mx-28  hover:text-indigo-900 text-gray-300 ${
            useStyle === 1
              ? "  hover:underline decoration-2 underline-offset-[38px] decoration-pink-300 decoration-solid"
              : ""
          } `}
          href="#"
        >
          Restaurant
        </a>
        <a
          onClick={() => eventHandler()}
          className={`mx-28 hover:text-indigo-900 text-gray-300 ${
            useStyle === 1
              ? "  hover:underline decoration-2 underline-offset-[38px] decoration-pink-300 decoration-solid"
              : ""
          }`}
          href="#"
        >
          About Us
        </a>
      </div>
    </>
  );
}
