import { useState } from "react";

export default function Header() {

    const [useStatus , setStatus] = useState(1);
    function setStatus(e){
        setStatus(1);
    }
  return (

    <>
      <div className="bg-[#FFFCFA] flex justify-center  p-8   font-semibold ">
        <a
          onClick={setstaus(1)}
          className="mx-28 hover:text-indigo-900 text-gray-300 hover:underline decoration-2 underline-offset-[38px] decoration-pink-300 hover:decoration-solid "
          href="#"
        >
          Restaurant
        </a>
        <a
          className="mx-28 hover:text-indigo-900 text-gray-300 hover:underline decoration-2 underline-offset-[38px] decoration-pink-300 hover:decoration-solid"
          href="#"
        >
          About Us
        </a>
      </div>
    </>
  );
}
