import React, { useEffect } from "react";
import {API_URL} from "../config"

export default function Content(){
console.log(API_URL, "this");  
useEffect(async ()=>{
    const categories = await fetch(`${API_URL}/api/categories`);
    const response = await categories.json();
    console.log(response);
})
    return(
        <>
        <div className="grid grid-cols-7 container mx-auto">
            <div className="col-span-2">
                <div className="">
                    <h2 className="font-bold pb-5">Categories</h2>
                    <ul className="">
                        <li>
                            All
                        </li>
                        <li>
                            French
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div className="col-span-5">
                content
            </div>

            
        </div>
        </>
    );
}
