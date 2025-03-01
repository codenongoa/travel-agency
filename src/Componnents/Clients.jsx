``
const clients = [
    {
       name:" kate Doe",
        image: "/Images/user1.JPG",
        text: " the travel agence provide excellent service and helped us plan the perfect vaccation perfect vaccationperfect vaccationperfec",
        location: 'New York, USA'
    },
    {
       name:" Johm Doe",
        image: "/Images/user2.JPG",
        text: " the travel agence provide excellent service and helped us plan the perfect vaccation perfect vaccationperfect vaccationperfec",
        location: 'London , UK'
    },
    {
       name:" Alice Johnson",
        image: "/Images/user3.JPG",
        text: " the travel agence provide excellent service and helped us plan the perfect vaccation perfect vaccationperfect vaccationperfect ",
        location: 'Sydney, Australia',
    },

    

]

const Clients = () => {

  return (
    <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8"> What Our Clients Say</h3>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                {clients.map((client, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-4 text-center
                    cursor-pointer transform transition duration-300 hover:scale-110 hover:bg-red-100">
                       <img src={client.image} alt=" " className=" w-24 h-24 rounded-full mx-auto mb-4"/>
                            <h3 className="text-xl font-bold mb-2"> {client.name} </h3>
                            <p className="text-gray-600 hover:text-black"> {client.text} </p>
                            <p className="text-gray-600 italic font-bold  hover:text-black"> {client.location} </p>
                    </div>
                ))} 
            </div>
        </div>
    </div>
  )}

export default Clients;