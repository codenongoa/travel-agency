
import { PiStudentFill } from "react-icons/pi"

const etudiants = [
    {
       icon: <PiStudentFill  size={100} className=" text-4xl text-blue-500"/>,
       title: <span className="text-blue-500">Management et administration des entreprises-double competence</span>,
        description: "diplome de l'IAE de Nantes Universite",
    },
    {
       icon: <PiStudentFill  size={100} className=" text-4xl text-yellow-500"/>,
        title: <span className="text-yellow-500">Management et administration des entreprises-double competence</span>,
        description: "diplome de l'IAE de Nantes Universite",
    },
    {
       icon: <PiStudentFill  size={100} className=" text-4xl text-green-500"/>,
        title: <span className="text-green-500">Management et administration des entreprises-double competence</span>,
        description: "diplome de l'IAE de Nantes Universite",
    },
    {
       icon: <PiStudentFill  size={100} className=" text-4xl text-red-500"/>,
       title: <span className="text-red-500">Management et administration des entreprises-double competence</span>,
        description: "dipl[o;e de l'IAE de Nantes Universite",
    },
    {
       icon: <PiStudentFill size={100}  className=" text-4xl text-violet-500"/>,
       title: <span className="text-violet-500">Management et administration des entreprises-double competence</span>,
        description: "diplome de l'IAE de Nantes Universite",
    },
    {
       icon: <PiStudentFill size={100} className="text-amber-500 hover:scale-125 cursor-pointer"/>,
       title: <span className="text-amber-500 hover:text-black">Management et administration des entreprises-double competence</span>,
        description: "diplome de l'IAE de Nantes Universite",
    },

    
]



const ServiceII = () => {
  return (
    <div className="py-12 bg-white">
        <div className="container px-4 mx-auto">
            <h1 className="text-4xl font-bold text-center mb-8">Nos Masters</h1>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {etudiants.map((etudiant, index) =>(
                    <div key={index} className="flex flex-col border-black border-2 items-center justify-center p-8 bg-white">
                        <div className="mb-4">{etudiant.icon}</div>
                        <h3 className="uppercase mb-5 text-center font-semibold">{etudiant.title}</h3>
                        <p className="italic">{etudiant.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default ServiceII;