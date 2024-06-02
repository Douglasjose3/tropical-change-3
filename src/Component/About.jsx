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
            <div id="about" className="bg-beach bg-cover bg-norepet bg-center bg-fixed min-w-screen min-h-screen pt-16">
                <div className="flex justify-center items-center">
                    <div className="">
                        <div className="pt-16">
                            <h1 className="font-black text-[70px] text-center text-black mb-[-30px]" data-aos = 'fade-right'>Tropical</h1>
                            <h1 className="font-black text-[70px] text-center text-black" data-aos = 'fade-left'>Change</h1>
                        </div>
                        <div className="text-center font-bold text-xl rounded-3xl text-black lg:w-[600px] px-20">
                            <p>"We want to make a difference in the Day Trading Community, by removing stress and adding confidence to your trades".</p>
                            <p>We do not intend to sell anything. We are a group of traders who like to share how we navigate the market.</p>
                            <div className='flex justify-center animate-pulse'>
                                <button className="flex items-center border-2 px-4 py-4 rounded-xl mt-8 bg-blueMedium text-white shadow-lg uppercase font-bold hover:bg-orangeLight hover:text-orangeDark hover:border-orangeDark"
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
            </div>
        </>
    )
} 

export default About;