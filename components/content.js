import React from "react";

export default function Content({ category, neighborhood }) {
  console.log(neighborhood);
  console.log(category);
  return (
    <>
      <div className="grid grid-cols-7 container mx-auto h-[75%] pt-10">
        <div className="col-span-2">
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
        <div className="col-span-5">content</div>
      </div>
    </>
  );
}
