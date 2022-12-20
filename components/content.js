import React, { useState } from "react";
import SideBar from "./sidebar";


export default function Content({ category, neighborhood, restaurant }) {
const [data , setData] = useState( restaurant.data);


  return (
    <>
      <div className="grid grid-cols-4 container mx-auto pt-10">
        <SideBar category={category} neighborhood={neighborhood} setData={setData}/>
        <div className="col-span-3">
          <h2 className="font-semibold pb-10 text-xl ">Restaurants</h2>
          <div className="grid grid-cols-3 gap-8">
            {category && data.map((item) => (

              <div class="max-w-sm rounded  overflow-hidden shadow-lg">
                <img className="w-full rounded-xl "  alt="this a restaurant picture" src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`}  />
                <div class="px-6 py-4">
                  <div class="font-bold text-xl mb-2">{item.attributes.name}</div>
                  <p class="text-gray-700 text-base">
                    {item.attributes.description}
                  </p>
                </div>

              </div>

            ))}

          </div>
        </div>
      </div>
    </>
  );
}
