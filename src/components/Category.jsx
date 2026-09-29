import indoor from "../assets/indoor-plant.png";
import outdoor from "../assets/outdor-plant-one.png";
import cactus from "../assets/cactus.png";
import bonsai from "../assets/bonsai.png";

function Category() {

    const categories = [
        {
            name: "indoor-plant",
            image: indoor,
        },
        {
            name: "outdoor-plant",
            image: outdoor,
        },
        {
            name: "cactus",
            image: cactus,
        },
        {
            name: "bonsai",
            image: bonsai,
        },
    ];

    return (
        <section className="w-full py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">

            <h2 className="text-center text-2xl sm:text-3xl font-medium mb-8 sm:mb-10">
                Category
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">

                {categories.map((category, index) => (

                    <div
                        key={index}
                        className="bg-green-100 rounded-2xl min-h-[100px] sm:min-h-[105px] flex items-center justify-between px-4 sm:px-5 relative"
                    >

                        <img
                            src={category.image}
                            alt={category.name}
                            className="w-[80px] h-[115px] sm:w-[90px] sm:h-[125px] object-contain"
                        />


                        <div className="flex flex-col items-center gap-2">

                            <p className="text-xs sm:text-sm text-center">
                                {category.name}
                            </p>

                            <button className="bg-green-600 text-white text-[10px] sm:text-xs px-3 sm:px-4 py-2 rounded-lg hover:bg-green-700">
                                Shop Now
                            </button>

                        </div>

                    </div>

                ))}

            </div>

        </section>
    );
}

export default Category;