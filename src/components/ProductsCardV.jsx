import React from "react";
import Image from "./Image";

function ProductsCard({ thumbnail, title, url, description, imgClass }) {
  return (
    <>
        <div className="flex-col p-3 items-center justify-center">
            <Image
                src={thumbnail}
                imgClass={imgClass}
                width="auto"
                height="auto"
                alt={title}
                url={url}
            />
            <h3 className="font-bold text-lg text-truncate-2 py-3">
            {title}
            </h3>
            <p className="text-truncate-2">{description}</p>
        </div>
    </>
  );
}
export default ProductsCard;
