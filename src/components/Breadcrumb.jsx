import React from "react";

function Breadcrumb({ title, subtitle, description }) {
    return (
        <div className="bg-[url('assets/images/bg.png')] bg-[center_bottom_0rem] bg-cover h-screen flex flex-col place-items-center justify-center">
            <div className="w-full px-4 lg:px-0 lg:w-1/2">
                <h1 className="font-bold">{ title }</h1>
                <h2 className="py-4">{ subtitle }</h2>
                <p className="pb-12">{ description }</p>
                <button className="px-8 py-4 bg-red-500 text-white">
                    Get Started !
                </button>
            </div>
        </div>
    )
}
export default Breadcrumb