import tree1 from "../assets/tree1.png";
import tree2 from "../assets/tree2.png";

import Ellipse1 from "../assets/Ellipse1.png";
import Ellipse2 from "../assets/Ellipse2.png";
import Ellipse3 from "../assets/Ellipse3.png";
import Ellipse4 from "../assets/Ellipse4.png";
import Ellipse5 from "../assets/Ellipse5.png";
import Ellipse6 from "../assets/Ellipse6.png";

function Hero() {
    return (
        <section className="w-full">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-5 sm:py-7">




                <div className="flex flex-col md:flex-row items-center gap-6 lg:gap-8">

                    
                    <div className="w-full md:w-[46%]">

                        <h1 className="text-2xl sm:text-3xl lg:text-[30px] xl:text-[32px] font-semibold leading-[1.15]">
                            Design and Build Your Unique
                            <br />
                            Mini Ecosystem
                        </h1>

                        <p className="text-gray-600 text-xs sm:text-sm mt-3 max-w-[310px] leading-[1.35]">
                            Learn the art of combining plants, soil, and
                            decorative elements to craft a thriving,
                            self-sustaining ecosystem.
                        </p>

                        <button className="bg-green-600 text-white text-xs sm:text-sm px-4 py-2 rounded-md mt-4 hover:bg-green-700 transition">
                            Shop Now
                        </button>

                        
                        <div className="flex items-center mt-5">

                            <div className="flex">

                                <img
                                    src={Ellipse1}
                                    alt="profile1"
                                    className="w-8 h-8 rounded-full object-cover border-2 border-white"
                                />

                                <img
                                    src={Ellipse2}
                                    alt="profile2"
                                    className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2"
                                />

                                <img
                                    src={Ellipse3}
                                    alt="profile3"
                                    className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2"
                                />

                                <img
                                    src={Ellipse4}
                                    alt="profile4"
                                    className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2"
                                />

                                <img
                                    src={Ellipse5}
                                    alt="profile5"
                                    className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2"
                                />

                                <img
                                    src={Ellipse6}
                                    alt="profile6"
                                    className="w-8 h-8 rounded-full object-cover border-2 border-white -ml-2"
                                />

                            </div>

                            <div className="ml-5 text-green-600 text-[9px] sm:text-[10px] leading-3">
                                Join Our Community to know more
                                <br />
                                We are waiting for you!
                            </div>

                        </div>

                    </div>


                    
                    <div className="w-full md:w-[54%]">

                        <div className="relative w-full h-[270px] sm:h-[290px] lg:h-[300px] bg-green-100">

                            
                            <img
                                src={tree1}
                                alt="Main plant"
                                className="absolute left-[8%] sm:left-[10%] bottom-0 h-[270px] sm:h-[295px] lg:h-[315px] object-contain z-10"
                            />


                            
                            <div className="absolute right-1 sm:right-2 bottom-5 bg-white shadow-lg rounded-2xl w-[230px] sm:w-[250px] lg:w-[270px] h-[120px] sm:h-[130px] p-4 z-20">

                                <h2 className="text-[11px] sm:text-xs lg:text-sm font-medium leading-4 max-w-[155px]">
                                    Elegant Indoor Bird of
                                    <br />
                                    Paradise Plant
                                </h2>

                                <p className="text-[7px] sm:text-[8px] lg:text-[9px] text-gray-500 mt-2 leading-3 max-w-[155px]">
                                    The Bird of Paradise plant is a
                                    stunning addition to any indoor
                                    space, known for its large, lush
                                    green leaves and exotic appeal.
                                </p>

                                
                                <img
                                    src={tree2}
                                    alt="Indoor plant"
                                    className="absolute right-[-12px] bottom-[-12px] w-[115px] sm:w-[125px] lg:w-[140px] h-[155px] sm:h-[170px] lg:h-[185px] object-contain z-30"
                                />

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        </section>
    );
}

export default Hero;