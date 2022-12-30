import React from "react"
import Image from "./Image"

function CardAbout ({ title, description, icon, src, srcBanner }) {
    return (
        <div className="flex flex-col items-center md:flex-row p-4 lg:px-14 lg:py-4">
            <div className="w-full lg:w-2/3 lg:pr-10 text-left">
                <h2 className="font-bold text-3xl my-3 text-slate-700">{ title }</h2>
                <p className="py-3">{ description }</p>
                <div className="grid grid-cols-1 lg:grid-cols-2 my-5">
                    <div className="flex justify-start w-full mr-5 my-10">
                        <Image 
                            src={src}
                            width={"auto"} 
                            height={"auto"}
                        />
                        {
                            icon?.map((v, i) => {
                                <div className="flex flex-col items-start pl-3 text-left">
                                    <h3 className="font-bold text-lg text-truncate-2">{ v.title }</h3>
                                    <p className="text-truncate-2">{ v.description }</p>
                                </div>
                            })
                        }
                    </div>
                </div>
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