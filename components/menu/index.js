export default function Menu(){
    return (
        <div className="w-full fixed bottom-0 bg-black py-7">
            <div className="text-xs font-poppins flex justify-between px-10">
                <p className="px-2 text-white cursor-pointer font-light">Home</p>
                <p className="px-2 text-white cursor-pointer font-light">About</p>
                <p className="px-2 text-white cursor-pointer font-light">Gallery</p>
                <p className="px-2 text-white cursor-pointer font-light">Contribution</p>
                <p className="px-2 text-white cursor-pointer font-light">Contact Me</p>
            </div>
        </div>
    )
}