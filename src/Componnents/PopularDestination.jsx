import { FaLocationDot } from "react-icons/fa6";


const destinations = [
    {
        image: "/Images/dubai.JPG",
        title: "Dubai, Emirate Arabe",
        description: " the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business",
    },

    {
        image: "/Images/guinee.JPG",
        title: "Dubreka, Guinee Conakry",
        description: "the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business",
    },

    {
        image: "/Images/morocco.JPG",
        title: "Tetouane, Nort of Morocco",
        description: "the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business"
    },

    {
        image: "/Images/riyad.JPG",
        title: "Riyad, Saoudia Arabia",
        description: "the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business"
    },

    {
        image: "/Images/saoudi.JPG",
        title: "Riyad, Saoudia Tour",
        description: " the city of the dream with millions of business the city of the dream with millions of businessthe city of the dream with millions of business"
    },
    {
        image: "/Images/morocco.JPG",
        title: "Tetouane, Nort of Morocco",
        description: "the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business"
    },
    {
        image: "/Images/guinee.JPG",
        title: "Dubreka, Guinee Conakry",
        description: "the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business",
    },
    {
        image: "/Images/dubai.JPG",
        title: "Dubai, Emirate Arabe",
        description: " the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business",
    },

]



const PopularDestination = () => {
  return (
    <div className="flex justify-center py-10">
        <div className="flex items-center space-x-8 p-4 border-gray-50 rounded-full">
        <div className="flex items-center space-x-3">
            <FaLocationDot />
            <select className="bg-transparent w-full border border-gray-50 rounded-md outline-0
            focus:ring focus:ring-indigo-300">
                <option value="" > select a country</option>
                <option value="US" >United State of America</option>
                <option value="CA" >Canada</option>
                <option value="UK" >United Kingdome</option>
            </select>
        </div>
        <div>
            <select className="bg-transparent w-full border border-gray-50 rounded-md outline-0
            focus:ring focus:ring-indigo-300" >
                <option value="" > select vender</option>
                <option value="US" >Toyota</option>
                <option value="CA" >Ford</option>
                <option value="UK" >Nissan</option>
            </select>
        </div>
        <div>
            <select className="bg-transparent w-full border border-green-50 rounded-md outline-0
            focus:ring focus:ring-indigo-300 ">
                <option value="" > select a model</option>
                <option value="US" >x</option>
                <option value="CA" >xl</option>
            </select>
        </div>
    </div>
    </div>
  )
}

export default PopularDestination;