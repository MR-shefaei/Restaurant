import React from "react";
import Image from "next/image";


export default function Content({ category, neighborhood, restaurant }) {
  console.log(neighborhood);
  console.log(category);
  console.log(restaurant);
  return (
    <>
      <div className="grid grid-cols-4 container mx-auto pt-10">
        <div className="col-span-1">
          <div className="">
            <h2 className="font-bold pb-5">Categories</h2>
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
        <div className="col-span-3">
          <h2 className="font-semibold ">The best restaurant in French</h2>
          <div className="grid grid-cols-3 gap-8">
            {category&&restaurant.data.map((item) => (
              
                <div class="max-w-sm rounded p-4 overflow-hidden shadow-lg">
                <img className="w-full " src={`http://localhost:1337${item.attributes.image.data[0].attributes.url}`} alt="Sunset in the mountains" />
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
