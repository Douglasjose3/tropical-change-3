import { RiLiveFill } from "react-icons/ri";
import { GiBrain } from "react-icons/gi";
import { IoBarChart } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css';

const Whats = () => {
    useEffect(() => {
        Aos.init();
    }, [])
    return (
        <div id="whats" className="bg-chart bg-cover bg-no-repeat min-w-screen min-h-screen pt-20">
            <div className="">
                <div className="backdrop-blur-md rounded-3xl text-white p-10">
                    <div className="">
                        <h1 className="font-black text-[70px] text-center text-white mb-[-30px]" data-aos = 'fade-right'>What's</h1>
                        <h1 className="font-black text-[70px] text-center text-white mb-1" data-aos = 'fade-left'>Included</h1>
                    </div>
                    <div className="lg:grid grid-cols-5 gap-11 p-10 hover:sm:grid-cols-1">
                        <div data-aos="zoom-in">
                            <span className="iconWhats"><RiLiveFill/></span>
                            <h1 className="whatsH1">Live Trading <br /> Sessions</h1>
                            <p className="whatsP">Trade live with our team, boasting a combined total of over 7 figures in payouts. Experience live tape reading, real-time trade executions, and ongoing education.</p>    
                        </div>
                        <div data-aos="zoom-in">
                            <span className="iconWhats"><GiBrain/></span>
                            <h1 className="whatsH1">Inclusive Mentorship Programs</h1>
                            <p className="whatsP">Master our trading and account management strategies. Gain an exclusive edge you won't find elsewhere. We guide you step by step through what made us successful.</p>
                        </div>
                        <div data-aos="zoom-in">
                            <span className="iconWhats"><FaHandshake/></span>
                            <h1 className="whatsH1">Supportive <br /> Community</h1>
                            <p className="whatsP">We pride ourselves on having one of the most talented and supportive trading communities. Join the chat and trade alongside fellow traders throughout all trading sessions.</p>
                        </div>
                        <div data-aos="zoom-in">
                            <span className="iconWhats"><IoBarChart/></span>
                            <h1 className="whatsH1">Detailed Chart Analysis</h1>
                            <p className="whatsP">Access our live market insights, liquidity analysis, and both pre-market and post-market charting.</p>
                        </div>
                        <div data-aos="zoom-in">
                            <span className="iconWhats"><FaMoneyBillTrendUp/></span>
                            <h1 className="whatsH1">Proprietary Firm Payout Strategies</h1>
                            <p className="whatsP">Our trading team has accumulated over 7 figures in payouts and has more than 30 years of experience. We know what works and we share all our strategies with you.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Whats;