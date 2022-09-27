import hero from "../../public/about.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
    faEnvelope,
} from "@fortawesome/free-solid-svg-icons"
import {
    faGithub,
    faGitlab,
    faInstagram
}  from "@fortawesome/free-brands-svg-icons"
import Image from "next/image"

export default function Hero() {
    return (
        <div className="py-20 container mx-auto">
            <div className="lg:flex lg:items-center">
                <div className="w-full lg:w-2/4 lg:px-10">
                    <div className="px-8 lg:px-0">
                        <h1 className="text-2xl font-poppins font-bold">Hi, I Am</h1>
                        <h1 className="text-4xl font-poppins text-orange-500 font-bold">Muhammad Zainuddin Basyar</h1>
                        <p className="text-sm font-poppins pt-2 text-slate-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin venenatis nec leo in aliquet. Integer tempus pharetra vulputate. </p>
                    </div>
                    <div className="flex items-center px-8 pt-4 lg:px-0">
                        <button className="px-4 py-2 font-poppins text-xs bg-black text-white rounded"><FontAwesomeIcon icon={faEnvelope} /> Mail Me</button>
                        <FontAwesomeIcon icon={faGithub} className="px-2 cursor-pointer" />
                        <FontAwesomeIcon icon={faGitlab} className="px-2 cursor-pointer" />
                        <FontAwesomeIcon icon={faInstagram} className="px-2 cursor-pointer" />
                    </div>
                </div>
                <div className="w-full lg:w-2/4 hidden lg:flex justify-center">
                    <Image src={hero} />
                </div>
            </div>
        </div>
    )
}