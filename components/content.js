import React from "react";

export default function Content({ category }) {

  console.log(category);
  return (
    <>
      <div className="grid grid-cols-7 container mx-auto h-[75%] pt-10">
        <div className="col-span-2">
          <div className="">
            <h2 className="font-bold pb-5">Categories</h2>
            <ul className="">
              {category?.data?.map((item) => (
                <li key={item.id}>{item.attributes.name}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="col-span-5">content</div>
      </div>
    </>
  );
}
