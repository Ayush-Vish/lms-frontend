import {BsFacebook  , BsInstagram , BsLinkedin ,BsTwitter} from "react-icons/bs"

const YEAR = new Date().getFullYear() 

function Footer ()  {
    return (
        <>
            <footer className="relative left-0 bottom-0 h-[11vh]  flex p-5 flex-col sm:flex-row items-center justify-between gap-2 p-4 text-white bg-gray-800 sm:px-20" >
                <section>
                    Copyright {YEAR} | All rights Reserved 
                </section>
                <section className="flex justify-center items-center gap-5 text-2xl text-white  " >
                    <a href="" className="hover:text-yellow-500  transition-all ease-in-out duration-300" >
                        <BsFacebook></BsFacebook>
                    </a>
                    <a href="" className="hover:text-yellow-400 transition-all ease-in-out duration-300">
                        <BsInstagram/>
                    </a>
                    <a href="" className="hover:text-yellow-400 transition-all ease-in-out duration-300">
                        <BsLinkedin/>
                    </a>
                    <a href="" className="hover:text-yellow-400 transition-all ease-in-out duration-300">
                        <BsTwitter/>
                    </a>
                </section>
            </footer>
        </>
    )
}

export default Footer