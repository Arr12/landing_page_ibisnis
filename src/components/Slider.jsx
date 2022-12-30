import React from "react";
import Slider from "react-slick";
import Image from "./Image";

function SimpleSlider({ className }) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const DataSlider = [
        {
            'name' : 'Drew',
            'img' : 'https://dev.ibisnis.com/images/thumbnails/62341d3ed125c.webp',
            'description' : 'Karena untuk bisa mendapatkan lebih banyak keuntungan, organisasi harus bisa menjual lebih banyak produk atau jasa kepada pelanggan, agar pelanggan mau membeli produk dan jasa lebih banyak, pelanggan harus bisa melihat keunggulan produk kita dibandingkan dengan kompetitor, dengan kata lain produk kita memenuhi ekspektasinya.'
        },
        {
            'name' : 'Drew',
            'img' : 'https://dev.ibisnis.com/images/thumbnails/62341d3ed125c.webp',
            'description' : 'Karena untuk bisa mendapatkan lebih banyak keuntungan, organisasi harus bisa menjual lebih banyak produk atau jasa kepada pelanggan, agar pelanggan mau membeli produk dan jasa lebih banyak, pelanggan harus bisa melihat keunggulan produk kita dibandingkan dengan kompetitor, dengan kata lain produk kita memenuhi ekspektasinya.'
        },
        {
            'name' : 'Drew',
            'img' : 'https://dev.ibisnis.com/images/thumbnails/62341d3ed125c.webp',
            'description' : 'Karena untuk bisa mendapatkan lebih banyak keuntungan, organisasi harus bisa menjual lebih banyak produk atau jasa kepada pelanggan, agar pelanggan mau membeli produk dan jasa lebih banyak, pelanggan harus bisa melihat keunggulan produk kita dibandingkan dengan kompetitor, dengan kata lain produk kita memenuhi ekspektasinya.'
        },
  ]
  return (
    <Slider className={`max-w-screen-2xl mx-auto my-5 ${className}`} {...settings}>
        {
            DataSlider?.map((v, i) => {
                return (
                    <div>
                        <Image 
                            imgClass={'w-60'}
                            src={ v.img }
                            width="auto"
                            height="auto"
                        />
                        <h3 className="font-bold my-5 text-2xl">{ v.name }</h3>
                        <p className="my-3 px-10">{ v.description }</p>
                    </div>
                )
            })
        }
    </Slider>
  );
}
export default SimpleSlider