import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Image from "./Image";

function Card ({ src, title, description, url, alt }) {
    return (
        <a href={url}>
            <div className="flex flex-col justify-start shadow-md mx-8 my-4 px-8 py-4 min-h-[15rem] bg-white rounded-md">
                <div className="flex flex-row justify-between w-full items-center py-3">
                    <Image 
                        src={src}
                        imgClass="h-20"
                        width="auto"
                        height="auto"
                        alt={alt}
                    />
                    <FontAwesomeIcon icon={ faChevronRight } className="text-black" />
                </div>
                <div className="text-left text-black">
                    <h2 className="font-bold text-2xl my-2">{ title }</h2>
                    <p className="text-xs">{ description }</p>
                </div>
            </div>
        </a>
    )
}
export default Card