import { FaConciergeBell, FaHotel, FaPlane, FaUmbrellaBeach } from "react-icons/fa";



const services = [
    {
       icon: <FaPlane  className=" text-4xl text-blue-500"/>,
        title: "Flight Booking",
        description: " the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business",
    },

    {
        icon: <FaHotel className="text-4xl text-blue-500" />,
        title: "Hotel Booking",
        description: "the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business",
    },

    {
       icon: <FaUmbrellaBeach className="text-4xl text-blue-500" />,
        title: "Beach Tours ",
        description: "the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business"
    },

    {
        icon: <FaConciergeBell  className="text-4xl text-blue-500"/>,
        title: "Concierge Services",
        description: "the city of the dream with millions of business the city of the dream with millions of business the city of the dream with millions of business"
    },

]

const Services = () => {

  return (
    <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h3 className=" text-3xl font-bold text-center mb-8"> Our Services </h3>
            <div className=" grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" >
                {services.map(( service, index ) => (
                    <div key={index} className="bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-8 
                    cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-blue-200">
                        <div className="mb-4">{service.icon} </div>
                            <h3 className="text-xl font-bold mb-2"> {service.title} </h3>
                            <p className="text-gray-600 hover:text-black"> {service.description} </p>
                    </div>
                ))} 
            </div>
        </div>
    </div>
   
  )
}

export default Services;