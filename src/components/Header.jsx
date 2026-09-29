import Logo from "../assets/plantlogo.png";

function Header() {
    return (
        <header className="w-full bg-white">
            <div className="max-w-7xl mx-auto min-h-[76px] px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 flex items-center justify-between">

                <div className="flex items-center gap-4 sm:gap-6 lg:gap-10">

                    <img
                        src={Logo}
                        alt="plantlogo"
                        className="w-12 h-9 sm:w-14 sm:h-10 object-contain"
                    />

                    <nav className="hidden sm:flex items-center gap-4 md:gap-6 lg:gap-8 text-xs sm:text-sm">

                        <a href="#" className="text-green-600">
                            Home
                        </a>

                        <a
                            href="#"
                            className="text-gray-800 hover:text-green-600"
                        >
                            Plant Collection
                        </a>

                        <a
                            href="#"
                            className="text-gray-800 hover:text-green-600"
                        >
                            About Us
                        </a>

                        <a
                            href="#"
                            className="text-gray-800 hover:text-green-600"
                        >
                            Contact Us
                        </a>

                    </nav>

                </div>

                <button className="bg-green-600 text-white px-4 sm:px-5 py-2 rounded-md text-xs sm:text-sm hover:bg-green-700">
                    Sign in
                </button>

            </div>
        </header>
    );
}

export default Header;