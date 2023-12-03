const Paciente = () => {
  return (
   
    <div className="m-3 bg-white shadow-ms px-5 py-10 rounded-xl">
        <p className="font-bold mb-3 text-gray-700 uppercase">Nombre: {' '}
            <span className="font-normal normal-case">Gabriel</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">email: {' '}
            <span className="font-normal normal-case">gabo.fajardo7@gmail.com</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Fecha Alta: {' '}
            <span className="font-normal normal-case">3 de diciembre de 2023</span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {' '}
            <span className="font-normal normal-case">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, provident! Facilis tempora adipisci, optio sapiente praesentium dignissimos libero, iste hic minus, perspiciatis odio laudantium vitae odit fuga quos quia provident.</span>
        </p>
    </div>
  )
}

export default Paciente
