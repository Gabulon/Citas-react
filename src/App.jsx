function App() {
  
  // const sumar = () => {
  //   const numero=5;
  //   if(numero>5){
  //     console.log("si es mayor");
  //   }else{
  //     console.log('No es mayor');
  //   }
  // }
  const edad =18;

  return (
    <>
    {edad>= 18 ? 'Eres mayor de edad' : 'No eres mayor de edad'}
    <div className='App'>
      <h1>{'Hola Mundo'.toUpperCase()}</h1>
    </div>
    </>
  )
}

export default App
