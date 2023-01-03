import React from "react";
import Slider from "react-slick";
import Image from "./Image";

function SimpleSlider({ className, DataSlider }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Slider className={`max-w-screen-2xl mx-auto my-5 ${className}`} {...settings}>
        {
            DataSlider?.map((v, i) => {
                return (
                    <div>
                        <div>
                            <Image 
                                imgClass={'rounded-full-important h-40'}
                                src={ v.img }
                                width="auto"
                                height="auto"
                            />
                        </div>
                        <h3 className="font-bold my-10 text-2xl">{ v.name }</h3>
                        <p className="my-3 px-10">{ v.description }</p>
                    </div>
                )
            })
        }
    </Slider>
  );
}
export default SimpleSlider