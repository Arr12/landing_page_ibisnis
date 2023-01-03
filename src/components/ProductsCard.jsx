import React from "react";
import Image from "./Image";

function ProductsCard ({ src, title, description, classProduct }) {
    return (
        <div className={`grid grid-cols-1 lg:grid-cols-2 justify-start items-center w-100 mr-5 my-10 ${classProduct}`}>
            <Image 
                src={src}
                width="auto"
                height="auto"
            />
            <div className="flex flex-col items-start pl-3 text-left">
                <h3 className="font-bold text-lg text-truncate-2 my-2">{ title }</h3>
                <p className="text-truncate-2">{ description }</p>
            </div>
        </div>
    )
}
export default ProductsCard