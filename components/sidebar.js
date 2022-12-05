import React from "react";


const SideBar=({category , neighborhood})=>{
    return(
        <>
            <div className="col-span-1">
          <div className="pl-10 ">
            <h2 className="font-bold pb-5 text-xl">Categories</h2>
            <ul className="">
              {category?.data?.map((item) => (
                <li key={item.id}>
                  <a href="#" className="hover:text-blue-700  ">
                    {item.attributes.name}
                  </a>
                </li>
              ))}
            </ul>
            <h2 className="font-semibold pt-6">Neighborhood</h2>
            <ul>
              {neighborhood?.data?.map((item) => (
                <li key={item.id}>
                  <a href="#" className="hover:text-blue-700">
                    {item.attributes.position}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        </>
    );

}
export default SideBar;