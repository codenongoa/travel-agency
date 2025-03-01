import { FaLocationArrow } from "react-icons/fa"

const travels = [
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

const Card2 = () => {
  return (
    <div className="py-12 bg-blue-100">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8"> Popular Destinationsss</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                { travels.map((travel, index) =>(
                    <div key={index} className=" rounded-lg shadow-md overflow-hidden cursor-default bg-white"  >
                        <img src={travel.image} alt="image" 
                            className="w-full h-48 object-cover transform transition duration-300 hover:scale-110"/>
                        <div className="p-4 ">
                        <div className="flex items-center space-x-2">
                        <FaLocationArrow className="text-sm" />
                        <h3 className="text-sm font-bold mb-2">{travel.title} </h3>
                        </div>
                            <p className="text-gray-600 italic">{travel.description} </p>
                        </div>
                    </div>  
                ))

                }
            </div>
        </div>
    
    </div>
  )
}

export default Card2