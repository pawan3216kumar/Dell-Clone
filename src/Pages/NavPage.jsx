import DellImage from "../Component/DellImage";
import SignUp from "../Component/SignupNav";
import Contact from "../Component/Contact";
import Cart1 from "../Component/Cart1";
import Country from "../Component/Country";
import Artificial from "../Component/Artificial";
import Products from "../Component/Products";
import Services from "../Component/Services";
import Deals from "../Component/Deals";
import Solutions from "../Component/Solutions";
import { FaSearch } from "react-icons/fa";

const AllNavbar = () => {
    return (
        <div>
            <nav className="p-4 shadow-md ">
                <div className="container mx-auto flex flex-wrap justify-between items-center">
                    <div className="flex items-center p-1 gap-3 w-3/5">
                        <DellImage />
                        <div className="w-full relative">
                            <input type="text" placeholder="Search" className="w-full p-2 rounded-lg focus:outline-blue-500 border-2 border-gray-400 " />
                            <div className='absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none'>
                                <FaSearch className='text-gray-500' />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-around w-2/5 items-center h-14">
                        <SignUp />
                        <Contact />
                        <Country />
                        <Cart1 />
                    </div>
                </div>

                <div className="flex gap-14 mt-6">
                    <Artificial />
                    <Products />
                    <Services />
                    <Solutions />
                    <Deals />
                </div>
            </nav>
            {/* <nav>

            </nav> */}
        </div>
    )
}

export default AllNavbar
