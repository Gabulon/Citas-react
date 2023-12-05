 import { useState,useEffect } from "react";

function Formulario(){

    const [nombre,setNombre]=useState('');
    const [propietario,setPropietario]=useState('');
    const [email,setEmail]=useState('');
    const [fecha,setFecha]=useState('');
    const [sintomas,setSintomas]=useState('');
    
    const [error,setError]=useState(false);

    const handleSubmit =(e) =>{
        e.preventdefault();
        //validación del formulario
        if([nombre,propietario,email,fecha,sintomas].includes('')){
            setError(true)
            return;
        }
        setError(false)
    }

    return(
        <div className="md:w-1/2 lg:w-2/5 mx-5 ">
            <h2 className="font-black text-3xl text-center">Seguimiento Pacientes</h2>
            <p className="text-lg mt-5 text-center mb-10">
                Añade Pacientes y {' '}
                <span className="text-indigo-600 font-bold ">Administralos</span>
            </p>
            <form onSubmit={handleSubmit}
            className="bg-white shadow-md rounded-lg py-10 px-5 mb-10">
                {error && (
                    <div className="bg-red-800 text-white text-center p-3 uppercase font-bold mb-3 rounded">
                        <p>Si hay error </p>
                    </div>
                    )}
                <div className="mb-5">
                    <label htmlFor="mascota" className="block text-gray-700 uppercase font bold">
                        Nombre Mascota</label>

                    <input type="text" 
                    id="mascota"
                    placeholder="Nombre de la mascota"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={nombre}
                    onChange={(e)=>setNombre(e.target.value)}
                    />
                </div >
                <div className="mb-5">
                    <label htmlFor="propietario" className="block text-gray-700 uppercase font bold">
                        Nombre Propietario</label>

                    <input type="text" 
                    id="propietario"
                    placeholder="Nombre del propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={propietario}
                    onChange={(e)=>setPropietario(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-gray-700 uppercase font bold">
                        Email</label>

                    <input type="email" 
                    id="email"
                    placeholder="Email contacto propietario"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="alta" className="block text-gray-700 uppercase font bold">
                        alta</label>

                    <input type="date" 
                    id="alta"
                    className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    value={fecha}
                    onChange={(e)=>setFecha(e.target.value)}
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="sintomas" className="block text-gray-700 uppercase font bold">
                        Sintomas</label>

                    <textarea
                    id="sintomas"
                    className=" border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                    placeholder="Describe los sintomas"
                    value={sintomas}
                    onChange={(e)=>setSintomas(e.target.value)}
                    />
                </div>
                <input
                    type="submit"
                    className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
                    value="Agregar Paciente"
                />
            </form>
        </div>
        
    )
}


export default Formulario;