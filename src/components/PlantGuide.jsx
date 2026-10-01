import leftPlant from "../assets/left-plant.jpg";
import rightPlant from "../assets/right-plant.jpg";

import plant1 from "../assets/plant1.jpg";
import plant2 from "../assets/plant2.jpg";
import plant3 from "../assets/plant3.jpg";

function PlantGuide() {
    return (
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-5">

                
                <div
                    className="min-h-[260px] sm:min-h-[280px] rounded-xl bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${leftPlant})` }}
                >
                    <div className="absolute inset-0 bg-white/20"></div>

                    <div className="relative z-10 p-6 sm:p-8 md:p-10 max-w-md">
                        <h2 className="text-2xl sm:text-3xl font-medium leading-tight text-black">
                            The Ultimate Guide to
                            <br />
                            Low-Maintenance
                            <br />
                            Houseplants
                        </h2>

                        <button className="mt-5 bg-black text-white text-sm px-4 py-2 rounded">
                            Shop Now
                        </button>
                    </div>
                </div>

                <div
                    className="min-h-[260px] sm:min-h-[280px] rounded-xl bg-cover bg-center relative overflow-hidden"
                    style={{ backgroundImage: `url(${rightPlant})` }}
                >
                    <div className="absolute inset-0 bg-white/20"></div>

                    <div className="relative z-10 p-6 sm:p-8 md:p-10">
                        <h2 className="text-2xl sm:text-3xl font-medium leading-tight text-black max-w-md">
                            Best Plants for Improving
                            <br />
                            Air Quality in Your Home
                        </h2>

                        <button className="mt-5 bg-black text-white text-sm px-4 py-2 rounded">
                            Shop Now
                        </button>

                        <div className="flex gap-3 mt-6">
                            <img
                                src={plant1}
                                alt="Plant"
                                className="w-12 h-10 sm:w-14 sm:h-12 object-cover rounded"
                            />

                            <img
                                src={plant2}
                                alt="Plant"
                                className="w-12 h-10 sm:w-14 sm:h-12 object-cover rounded"
                            />

                            <img
                                src={plant3}
                                alt="Plant"
                                className="w-12 h-10 sm:w-14 sm:h-12 object-cover rounded"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default PlantGuide;