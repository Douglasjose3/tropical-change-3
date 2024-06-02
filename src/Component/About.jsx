import { AiFillDiscord } from "react-icons/ai";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';


const About = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <>
            <div id="about" className="bg-cover bg-beach bg-fixed min-w-screen min-h-screen hover:sm: bg-center">
                <div className="flex justify-center items-center">
                        <div className="lg:pt-[100px] lg:ml-10 hover:sm: pt-[50px]">
                            <div className="">
                                <h1 className="font-black lg:text-[70px] text-center lg:text-black mb-[-30px] hover:sm: text-[50px]" data-aos = 'fade-right'>Tropical</h1>
                                <h1 className="font-black lg:text-[70px] text-center lg:text-black hover:sm: text-[50px]" data-aos = 'fade-left'>Change</h1>
                            </div>
                            <div className="text-center font-bold text-2xl rounded-3xl lg:text-black lg:w-[550px] p-5 backdrop-brightness-150 hover:sm: w-full">
                                <p className="">"We want to make a difference in the Day Trading Community, by removing stress and adding confidence to your trades".</p>
                                <p>We do not intend to sell anything. We are a group of traders who like to share how we navigate the market.</p>
                            </div>
                            <div className='flex justify-center animate-pulse'>
                                <button className="flex items-center border-2 px-4 py-4 rounded-xl mt-8 bg-blueMedium text-white shadow-lg uppercase font-bold text-nowrap hover:bg-orangeLight hover:text-orangeDark hover:border-orangeDark"
                                    type="button">
                                    <p className="text-[30px] mr-3">
                                        <AiFillDiscord/>
                                    </p>            
                                    <a href="https://www.launchpass.com/tropical-change/discord">Join Our Discord</a>
                                </button>
                            </div>
                        </div>
                </div>
            </div>
        </>
    )
} 

export default About;