import React from "react"
import Image from "./Image"

function CardAbout ({ title, description, icon, src, srcBanner }) {
    return (
        <div className="flex flex-col items-center md:flex-row p-4 lg:px-14 lg:py-4">
            <div className="w-full lg:w-2/3 lg:pr-10 text-left">
                <h2 className="font-bold text-3xl my-3 text-slate-700">{ title }</h2>
                <p className="py-3">{ description }</p>
                <div className="grid grid-cols-1 my-5">
                    <div className="grid grid-cols-1 lg:grid-cols-2 w-full mr-5 my-5">
                        {
                            icon?.map((v, i) => {
                                return (
                                    <div className="my-2">
                                        <div className="flex flex-row items-center text-left">
                                            <div className="w-3/12">
                                                <Image 
                                                    src={`${v.thumbnail}`}
                                                    width="auto"
                                                    height="auto"
                                                />
                                            </div>
                                            <div className="flex flex-col ml-3 w-9/12">
                                                <h3 className="font-bold text-lg text-truncate-2">{ v.title }</h3>
                                                <p className="text-truncate-2">{ v.description }</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <button className="px-4 py-4 flex my-4 items-center bg-red-500 w-40 text-white">
                    <span className="text-white">Daftar Sekarang</span>
                </button>
            </div>
            <div className="w-full lg:w-2/6">
                <Image 
                    src={ srcBanner }
                    width={ "auto" } 
                    height={ "auto" }
                />
            </div>
        </div>
    )
}
export default CardAbout