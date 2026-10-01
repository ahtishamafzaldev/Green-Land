import pilea from "../assets/pilea-depressa.png";
import dischidia from "../assets/dischidia.png";
import spiderPlant from "../assets/spider-plant.png";
import surfinia from "../assets/surfinia-violet.png";
import chineseSweetPlum from "../assets/chinese-sweet-plum.png";
import nargis from "../assets/nargis.png";
import satsukiAzalea from "../assets/satsuki-azalea.png";
import bougainvillea from "../assets/bougainvillea-spectabilis.png";

function PlantProducts() {
    const plants = [
        {
            name: "Pilea Depressa",
            price: "৳700.00",
            image: pilea,
        },
        {
            name: "Dischidia",
            price: "৳700.00",
            image: dischidia,
        },
        {
            name: "Spider Plant",
            price: "৳700.00",
            image: spiderPlant,
        },
        {
            name: "Surfinia Violet",
            price: "৳700.00",
            image: surfinia,
        },
        {
            name: "Chinese Sweet Plum",
            price: "৳700.00",
            image: chineseSweetPlum,
        },
        {
            name: "rose",
            price: "৳700.00",
            image: bonsai,
        },
        {
            name: "Satsuki Azalea",
            price: "৳700.00",
            image: satsukiAzalea,
        },
        {
            name: "Bougainvillea Spectabilis",
            price: "৳700.00",
            image: bougainvillea,
        },
    ];

    return (
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-10 py-8">
            <div className="max-w-7xl mx-auto">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {plants.map((plant, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl shadow-md overflow-hidden"
                        >
                            <div className="h-44 sm:h-48 md:h-52 flex items-center justify-center p-3">
                                <img
                                    src={plant.image}
                                    alt={plant.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <div className="px-3 pb-4">
                                <div className="flex items-end justify-between gap-2">
                                    <div>
                                        <h3 className="text-sm sm:text-base text-gray-900">
                                            {plant.name}
                                        </h3>

                                        <p className="text-sm sm:text-base text-gray-900 mt-1">
                                            {plant.price}
                                        </p>
                                    </div>

                                    <button className="w-9 h-9 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition">
                                        🛒
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default PlantProducts;