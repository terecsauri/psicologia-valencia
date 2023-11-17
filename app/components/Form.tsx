"use client"
import React from 'react'

export default function Form() {
    const handleSubmit = () => {
     
        alert("Solicitud enviada correctamente") 
      }
  return (
    <div className=''>
                <form className=" mt-5 w-96 mx-auto flex flex-col" onSubmit={handleSubmit} >
          <p className="font-bold text-center">Nombre (requerido)</p>
          <label>
            {" "}
            <input type="text" name="name" required className="border-2 border-gray w-full" />{" "}
          </label>
          <p className="font-bold text-center">Correo Electrónico (requerido)</p>
          <label>
            {" "}
            <input type="text" name="email" required className="border-2 border-gray w-full"/>{" "}
          </label>
          <p className="font-bold text-center">Asunto</p>
          <label>
            {" "}
            <input type="text" name="asunto" className="border-2 border-gray w-full"/>{" "}
          </label>
          <p className="font-bold text-center">Mensaje</p>
          <label >
            {" "}
            <textarea className="border-2 border-gray w-full"/>
          </label>
          <div>
          <input type="submit" value="Submit" className="w-min float-right border border-2 rounded-xl w-full font-bold px-2 cursor-pointer"/>
          </div>
        </form>
    </div>
  )
}
