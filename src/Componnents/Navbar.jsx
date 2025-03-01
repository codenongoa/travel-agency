import { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { Link } from "react-router"


const Navbar = () => {
    const [ isOpen, setOpen] = useState(false);

  return (
    <nav className="fixed m-4 top-0 left-0 right-0 shadow-lg z-50 bg-white xl:rounded-full sm:rounded-lg">
        <div className="px-4 flex justify-between items-center h-16 ">
            <h3 className="text-2xl font-bold px-2"> Namacia Yaadu</h3>
            <div className="hidden md:flex space-x-4 font-bold text-sm items-center">
                <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded-md">Home</Link>
                <Link to="/gallery"  className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded-md">Gallery</Link>
                <Link to="/contat" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded-md">Contact</Link>
                <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded-md">About</Link>
                <button className="py-2 px-6 border bg-gray-300 rounded-full">
                Login</button>
            </div>
            <div className="md:hidden">
                <button  onClick={() => setOpen(!isOpen)}>
                    { isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
        {
            isOpen && (
                <div className="md:hidden flex space-y-6 py-4 flex-col bg-white items-center">
                <Link to="/" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded-md">Home</Link>
                <Link to="/gallery" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded-md">Gallery</Link>
                <Link to="/contat" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded-md">Contact</Link>
                <Link to="/about" className="px-6 py-2 hover:bg-gray-600 hover:text-white rounded-md">About</Link>
                <button className="py-2 px-6 border bg-gray-300 rounded-md"> Login</button>
            </div>
            )
        }
    </nav>
  )
}

export default Navbar;