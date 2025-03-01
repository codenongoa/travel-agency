import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className='bg-gray-800 py-8 text-white'>
      <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          <div>
            <h2 className='text-2xl font-bold mb-4'>Namacia Yaadu</h2>
            <p className='mb-4'>Your trusted partner for unforgettable travel experiences. Explore the world with us.</p>
          </div>
          <div className='md:flex md:justify-between w-full'>
            <div>
              <h4 className='text-lg font-semibold'>Quick Links</h4>
              <div className='flex flex-col mt-4 space-y-2'>
                <Link to="/">Home</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/about">About</Link>
              </div>
            </div>
            <div>
              <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
              <div className='flex space-x-4 mb-4'>
                <FaFacebook size={24} className='text-blue-500 hover:text-blue-600'/>
                <FaInstagram size={24} className='text-pink-500 hover:text-pink-600'/>
                <FaTwitter size={24} className='text-blue-400 hover:text-blue-500'/>
                <FaYoutube size={24} className='text-red-500 hover:text-red-600'/>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 flex flex-col md:flex-row md:items-center md:justify-center'>
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

        <div className='flex flex-col md:flex-row justify-between border-t mt-8 border-gray-700 pt-4'>
          <p>© 2024 Namacia Yaadu. All rights reserved.</p>
          <div className='flex space-x-4 mt-4 md:mt-0'>
            <Link to="">Privacy Policy</Link>
            <Link to="">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
