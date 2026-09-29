import snakePlant from "../assets/snakePlant.png";
import calathea from "../assets/calathea.png";
import fern from "../assets/fern.png";
import houseplant from "../assets/houseplant.png";
import roseopicta from "../assets/roseopicta.png";
import cheesePlant from "../assets/cheesePlant.png";
import peacockPlant from "../assets/peacockPlant.png";
import zamioculcas from "../assets/zamioculcas.png";

function Product() {
    const products = [
        {
            name: "Snake Plant Laurentii",
            price: "₮700.00",
            image: snakePlant,
        },
        {
            name: "Calathea Orbifolia",
            price: "₮700.00",
            image: calathea,
        },
        {
            name: "Kuwu Potted Faux Fern",
            price: "₮700.00",
            image: fern,
        },
        {
            name: "Indoor Houseplant",
            price: "₮700.00",
            image: houseplant,
        },
        {
            name: "Calathea Roseopicta",
            price: "₮700.00",
            image: roseopicta,
        },
        {
            name: "Swiss Cheese Plant",
            price: "₮700.00",
            image: cheesePlant,
        },
        {
            name: "Peacock Plant",
            price: "₮700.00",
            image: peacockPlant,
        },
        {
            name: "Zamioculcas Zamiifolia",
            price: "₮700.00",
            image: zamioculcas,
        },
    ];

    return (
        <section className="w-full px-4 sm:px-6 md:px-8 lg:px-12 py-8">

            
            <h2 className="text-center text-lg sm:text-xl font-medium mb-8">
                All Product
            </h2>

            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {products.map((product, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition duration-300"
                    >

                        
                        <div className="w-full h-48 sm:h-52 md:h-56 flex items-center justify-center p-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </div>

                        
                        <div className="px-3 pb-4">

                            <div className="flex items-center justify-between gap-2">

                                <div>
                                    <h3 className="text-sm sm:text-base font-normal">
                                        {product.name}
                                    </h3>

                                    <p className="text-sm mt-1">
                                        {product.price}
                                    </p>
                                </div>

                                
                                <button
                                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-md bg-green-600 text-white flex items-center justify-center hover:bg-green-700 transition"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="15"
                                        height="15"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                                        <line x1="3" y1="6" x2="21" y2="6" />
                                        <path d="M16 10a4 4 0 0 1-8 0" />
                                    </svg>
                                </button>

                            </div>
                        </div>

                    </div>
                ))}
            </div>

        </section>
    );
}

export default Product;