import { Link } from "react-router";
import { FaFacebook,FaInstagram,FaTwitter, FaYoutube } from "react-icons/fa";

const Footer2 = () => {
  return (
    <footer className="bg-gray-800 px-4 md:px-16 lg:px-28">
        <div className="container grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* la section de about us */}
            <div className="py-8">
                <h2 className="text-lg font-bold mb-4 text-white">
                    About Us
                </h2>
                <p className="text-gray-300 text-sm"> Your trusted partner for unforgettable travel 
                experiences. Explore the world with us.
                </p>
            </div>

            {/* la section de quick link */}
            <div className="py-8">
            <h2 className="text-lg font-bold mb-4 text-white">
                    Quick Link
                </h2>
                <div className="flex flex-col">
                    <Link to="/" className="hover:text-blue-500 hover:scale-105 hover:font-semibold text-gray-300">Home</Link>
                    <Link to="/gallery" className="hover:text-blue-500 hover:scale-105 hover:font-semibold text-gray-300">Gallery</Link>
                    <Link to="/contact" className="hover:text-blue-500 hover:scale-105 hover:font-semibold text-gray-300">Contact</Link>
                    <Link to="/about" className="hover:text-blue-500 hover:scale-105 hover:font-semibold text-gray-300">About</Link>
                </div>
            </div>

            {/* la section de Follow Us */}
            <div className="py-8">
            <h2 className="text-lg font-bold mb-4 text-white">
                    Follow Us
                </h2>
                <div className=' flex space-x-4'>
                    <FaFacebook size={24} className='text-blue-500 hover:text-blue-600'/>
                    <FaInstagram size={24} className='text-pink-500 hover:text-pink-600'/>
                     <FaTwitter size={24} className='text-blue-400 hover:text-blue-500'/>
                    <FaYoutube size={24} className='text-red-500 hover:text-red-600'/>
                </div>
                <div className='mt-8 flex flex-col md:flex-row md:items-center md:justify-start'>
          <form className='flex w-full md:w-auto'>
            <input type='email' 
              placeholder='Enter your email' 
              className='p-2 rounded-l-lg bg-gray-700 text-white border border-gray-600 focus:outline-none'
            />
            <button className='bg-blue-600 text-white px-4 py-2 rounded-r-lg border border-blue-600 hover:bg-blue-700'> 
              Subscribe
            </button>
          </form>
        </div>
            </div>
            {/* la section 2024 */}
        </div>
       <div className="flex text-white pb-4  border-t items-center justify-center mt-6">
       <p>© 2024 Namacia Yaadu. All rights reserved.</p>
       </div>
    </footer>
  )
}

export default Footer2