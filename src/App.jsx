import { useEffect, useState } from 'react'
import axios from 'axios'


function App() {
  const API_URL = import.meta.env.VITE_API_URL

  const [criptos, setCriptos] = useState()

  useEffect(()=>{
    axios.get(`${API_URL}assets`)
    .then((data) =>{
      console.log(data)
      setCriptos(data.data.data)
    })
    .catch(()=>{
      console.error("la peticion fallo")
    })

  }, [])
  if(!criptos) return <spa>Cargando...</spa>//mostrando loaders
 
  return (
    <>
    <h1>lista de criptomonedas</h1>
    <ol>
      {
      criptos.map(({id,name,priceUsd}) => (
        <li key ={id} >Nombre:{name} Precio: {priceUsd}</li>


      ))
      }
    </ol>
    
    
    
    </>
   
  )
}


export default App

// function App() {
//   const API_URL = import.meta.env.VITE_API_URL

//   const [criptos, setCriptos] = useState()

//   useEffect(()=>{
//     fetch(`${API_URL}assets`)
//     .then((resp)=>resp.json())
//     .then((data) =>{
//       setCriptos(data.data)
//     })
//     .catch(()=>{
//       console.error("la peticion fallo")
//     })

//   }, [])
//   if(!criptos) return <spa>Cargando...</spa>//mostrando loaders
 
//   return (
//     <>
//     <h1>lista de criptomonedas</h1>
//     <ol>
//       {
//       criptos.map(({id,name,priceUsd}) => (
//         <li key ={id} >Nombre:{name} Precio: {priceUsd}</li>


//       ))
//       }
//     </ol>
    
    
    
//     </>
   
//   )
// }


// export default App