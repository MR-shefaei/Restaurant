import {  useState } from "react";

export default function Header() {

    const [useStyle , setStyle] = useState(0);
    
    function eventHandler(e){
       setStyle(e);
    }
  return (

    <>
      <div className="bg-[#FFFCFA] flex justify-center  p-8   font-semibold ">
        <a
          onClick={()=>eventHandler(1)}
          className={`mx-28 ${useStyle === 1 ? " hover:text-indigo-900 text-gray-300 hover:underline decoration-2 underline-offset-[38px] decoration-pink-300 hover:decoration-solid" : ""} `}
          href="#"
        >
          Restaurant
        </a>
        <a
          onClick={()=>eventHandler(1)}
          className={`mx-28 ${useStyle === 1 ? " hover:text-indigo-900 text-gray-300 hover:underline decoration-2 underline-offset-[38px] decoration-pink-300 hover:decoration-solid" : ""}`}
          href="#"
        >
          About Us
        </a>
      </div>
    </>
  );
}
