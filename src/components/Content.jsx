import React, { useState, useEffect } from "react";
import axios from "axios";
import CardService from "./CardService";
import CardAbout from "./CardAbout";
import Image from "./Image";
import ProductsCard from "./ProductsCard";
import SimpleSlider from "./Slider";

function Content({ DataContent }) {
    const [ products, setProducts ] = useState(false)
    const [ posts, setPosts ] = useState(false)

    useEffect (() => {
        if(!products){
            axios.get(`https://dummyjson.com/products?limit=5`)
            .then((result) => {
              setProducts(result.data);
            })
        }
    }, [products])

    useEffect (() => {
        if(!posts){
            axios.get(`https://dummyjson.com/posts?limit=5`)
            .then((result) => {
              setPosts(result.data);
            })
        }
    }, [posts])

    return (
        <div>
            <div className="">
                <div className="bg-slate-100 py-40">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4 lg:px-14 lg:py-10 max-w-screen-2xl mx-auto">
                        {
                            DataContent[0].service?.map((v, i) => {
                                return (
                                    <CardService src={`/src/assets/${v.thumbnail}`} title={v.name} description={v.description} url={v.slug} />
                                )
                            })
                        }
                    </div>
                </div>
                
                <div className="bg-white py-40">
                    <div className="p-4 lg:px-14 lg:py-4 max-w-screen-2xl mx-auto">
                        <div className="flex flex-col w-full lg:w-1/2 mx-auto mb-12">
                            <h2 className="my-3 font-bold text-3xl">{ DataContent[0].benefits.title }</h2>
                            <p>{ DataContent[0].benefits.description }</p>
                        </div>
                        <div className="flex flex-col lg:flex-row my-5 items-center">
                            <div className="w-full lg:w-1/4">
                                {
                                    products.products?.map((v, i) => {
                                        return (
                                            <ProductsCard
                                                src={v.thumbnail}
                                                title={v.title}
                                                description={v.description}
                                            />
                                        )
                                    })
                                }
                            </div>
                            <div className="w-full lg:w-1/2">
                                <Image src={ DataContent[0].benefits.image } />
                            </div>
                            <div className="w-full lg:w-1/4">
                                {
                                    products.products?.map((v, i) => {
                                        return (
                                            <ProductsCard
                                                src={v.thumbnail}
                                                title={v.title}
                                                description={v.description}
                                                classProduct={'grid-flow-dense'}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="bg-slate-100 py-40">
                    <div className="max-w-screen-2xl mx-auto">
                        <CardAbout 
                            title={ DataContent[0].about.title } 
                            description={ DataContent[0].about.description } 
                            srcBanner={ DataContent[0].about.thumbnail }
                        />
                    </div>
                </div>

                <div className="py-40 bg-white">
                    <div className="max-w-screen-2xl mx-auto">
                        <div className="flex flex-col p-4 lg:px-14 lg:py-4">
                            <h2 className="font-bold text-3xl my-3">Products</h2>
                            <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic possimus eligendi neque voluptas minima! Eligendi asperiores esse atque sunt quasi, quisquam, quae praesentium reprehenderit hic libero ad doloribus. Voluptatum, esse.</p>

                            <div className="grid grid-cols-1 lg:grid-cols-3 my-5">
                                <div className="flex-col items-center justify-center">
                                    <img className="mx-auto" width={330} height={330} src="/src/assets/no_image.jpg" alt="No image" />
                                    <h3 className="font-bold text-lg text-truncate-2 py-3">Products Products Products</h3>
                                    <p className="text-truncate-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi expedita tempore temporibus explicabo modi error voluptas quo.</p>
                                </div>
                            </div>

                            <button className="px-4 py-2 flex items-center justify-center bg-red-500 w-40 mx-auto text-white">
                                <svg aria-hidden="true" className="hidden mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                                <span className="text-white">Load More</span>
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="py-40 bg-black/50">
                    <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row p-4 items-center text-white lg:px-14 lg:py-4">
                        <div className="w-full lg:w-7/12 text-left px-10">
                            <h2 className="text-3xl font-bold">Daftarkan Bisnis Anda Sekarang</h2>
                            <p>Segera kembangkan bisnis Anda dengan bergabung di iBisnis.</p>
                            <button className="my-10 px-4 py-2 bg-red-500 text-white">
                                Daftarkan Sekarang !
                            </button>
                        </div>
                        <div className="w-full lg:w-5/12 flex flex-col items-center my-20 lg:my-4">
                            <h3 className="font-bold text-lg my-4">Get the Apps Now !</h3>
                            <a href="https://play.google.com/store/apps/details?id=com.solindo.ibisnis">
                                <Image 
                                    imgClass={'w-60'}
                                    src={'/src/assets/download-ibisnis.png'}
                                    width="auto"
                                    height="auto"
                                />
                            </a>
                        </div>
                    </div>
                </div>
                
                <div className="bg-slate-100 py-40">
                    <div className="max-w-screen-2xl mx-auto">
                        <CardAbout 
                            title="About Product"
                            description={ DataContent[0].about.description } 
                            srcBanner={ DataContent[0].about.thumbnail }
                        />
                    </div>
                </div>
                
                <div className="bg-white py-40">
                    <div className="p-4 lg:px-14 lg:py-4">
                        <h2 className="text-3xl font-bold my-5">Testimonial</h2>
                        <SimpleSlider />
                    </div>
                </div>

                <div className="py-40 bg-white">
                    <div className="p-4 lg:px-14 lg:py-4 max-w-screen-2xl mx-auto">
                        <h2 className="text-3xl font-bold">News / Article</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-3 my-5">
                            <div className="flex-col items-center justify-center">
                                <img className="mx-auto" width={330} height={330} src="/src/assets/no_image.jpg" alt="No image" />
                                <h3 className="font-bold text-lg text-truncate-2 py-3">Products Products Products</h3>
                                <p className="text-truncate-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Commodi expedita tempore temporibus explicabo modi error voluptas quo.</p>
                            </div>
                        </div>

                        <button className="px-4 py-2 flex items-center justify-center bg-red-500 w-40 mx-auto text-white">
                            <svg aria-hidden="true" className="hidden mr-2 w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-red-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span className="text-white">Load More</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Content