import Card2 from "../Componnents/Card2"
import Clients from "../Componnents/Clients"
import Services from "../Componnents/Services"

const Home = () => {
  return (
    <>
    <div className="relative h-screen bg-cover" style={{backgroundImage: "url('/Images/cover.JPG') "}}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4"> Explore de World with Us </h1>
            <p className="text-lg md:text-2xl text-white mb-8"> Discover amazing places at exclusive deals </p>
            <button className="border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500
              transform transition duration-300 hover:scale-105">
                Get Started </button>
        </div>
    </div>

    <Card2 />
    <Services />
    <Clients />
    </>
  )
}

export default Home;     