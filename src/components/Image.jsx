import React from "react";

function Image ({ src, url, width, height, className, imgClass, alt  }) {
    return (
        <a href={url} className={className}>
            <img className={`mx-auto rounded-lg ${imgClass}`} width={width} height={height} src={src} 
                onError={(e) => e.target.src='/src/assets/images/no_image.jpg'} alt={alt} 
            />
        </a>
    )
}
export default Image