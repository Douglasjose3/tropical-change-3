import { AiFillDiscord } from "react-icons/ai"

const Footer = () => {
    return (
        <div className="uppercase p-10 bg-blueMedium">
            <div className="flex justify-center animate-pulse">
                <button className="flex text-nowrap border-2 px-4 py-4 rounded-xl uppercase ml-10 shadow-xl font-bold bg-orangeDark text-white hover:bg-orangeLight hover:text-orangeDark"
                    type="button">
                        <p className="text-[30px] mr-3">
                            <AiFillDiscord/>
                        </p>            
                    <a href="https://www.launchpass.com/tropical-change/discord">Join Our Discord</a>
                </button>
            </div>

            <div className="flex justify-center pt-10 lg:text-nowrap hover:sm: text-wrap text-center">
                <span className="text-white">Cookie Policy  | Do Not Sell My Information |  DMCA | Terms of Service |  Privacy Policy</span>
            </div>
        </div>
    )
}

export default Footer;