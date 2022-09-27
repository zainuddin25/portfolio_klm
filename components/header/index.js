import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faInstagram,
    faDribbble,
    faBehance
} from "@fortawesome/free-brands-svg-icons"

export default function Header(){
    return (
        <div className="w-full fixed top-0 bg-white">
            <div className="container mx-auto items-center px-8 border-b-2 py-4 flex justify-between">
                <h1 className="font-poppins text-3xl font-bold hover:text-orange-500 ease-in-out duration-200 cursor-pointer">KLM<span className="text-orange-500">.</span></h1>
                <div className="text-xs font-poppins hidden lg:flex lg:justify-center ">
                    <p className="px-2 hover:text-orange-500 cursor-pointer ease-in-out duration-200 font-light">Home</p>
                    <p className="px-2 hover:text-orange-500 cursor-pointer ease-in-out duration-200 font-light">About</p>
                    <p className="px-2 hover:text-orange-500 cursor-pointer ease-in-out duration-200 font-light">Gallery</p>
                    <p className="px-2 hover:text-orange-500 cursor-pointer ease-in-out duration-200 font-light">Contribution</p>
                    <p className="px-2 hover:text-orange-500 cursor-pointer ease-in-out duration-200 font-light">Contact Me</p>
                </div>
                <div className="text-2xl flex justify-center">
                    <FontAwesomeIcon icon={faInstagram} className="px-2 text-black hover:text-orange-500 ease-in-out duration-200" />
                    <FontAwesomeIcon icon={faDribbble} className="px-2 text-black hover:text-orange-500 ease-in-out duration-200" />
                    <FontAwesomeIcon icon={faBehance} className="px-2 text-black hover:text-orange-500 ease-in-out duration-200" />
                </div>
            </div>
        </div>
    )
}