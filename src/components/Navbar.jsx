import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAddressCard, faGears, faMessage, faBars, faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Navbar (props) {
    const Logo = props.Logo
    const LogoIbisnis = props.LogoIbisnis
    const Menu = props.Menu
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="flex justify-between w-full fixed top-0 left-0 p-4 lg:px-14 lg:py-4 items-center bg-white shadow-sm">
            <div className="flex flex-row items-center">
                <img className="h-14" src={Logo} width="auto" height="auto" />
                <img className="h-10 ml-2 hidden lg:block" src={LogoIbisnis} width="auto" height="auto" />
            </div>
            <button className="block relative lg:hidden" onClick={ () => setIsOpen(!isOpen) }>
                <FontAwesomeIcon icon={faBars} />
                <span className="animate-ping top-0 right-0 absolute inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
            </button>
            <div className={isOpen ? "flex flex-col fixed top-0 w-4/5 p-4 shadow-lg bg-white right-0 h-screen z-20" : "hidden lg:flex"}>
                <button className={`${isOpen ? "block" : "hidden"} bg-white text-right`} onClick={ () => setIsOpen(!isOpen) }>
                    <FontAwesomeIcon className="" icon={faArrowRight} />
                </button>
                {
                    Menu?.map((v, i) => {
                        return (
                            <div className="flex flex-row">
                                {/* <FontAwesomeIcon icon={ v.icon } /> */}
                                <a href={ v.href } className="text-black px-4 py-3">{ v.name }</a>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Navbar