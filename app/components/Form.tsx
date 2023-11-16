"use client"
import React from 'react'

export default function Form() {
    const handleSubmit = () => {
     
        alert("Solicitud enviada correctamente") 
      }
  return (
    <div className=' flex flex-col items-center'>
                <form className=" mt-5 " onSubmit={handleSubmit} >
          <p className="font-bold">Nombre (requerido)</p>
          <label>
            {" "}
            <input type="text" name="name" required className="border-2 border-gray w-full" />{" "}
          </label>
          <p className="font-bold">Correo Electrónico (requerido)</p>
          <label>
            {" "}
            <input type="text" name="email" required className="border-2 border-gray w-full"/>{" "}
          </label>
          <p className="font-bold">Asunto</p>
          <label>
            {" "}
            <input type="text" name="asunto" className="border-2 border-gray w-full"/>{" "}
          </label>
          <p className="font-bold">Mensaje</p>
          <label >
            {" "}
            <textarea className="border-2 border-gray w-full"/>
          </label>
          <div>
          <input type="submit" value="Submit" className="border border-2 rounded-xl w-fit font-bold px-2 cursor-pointer"/>
          </div>
        </form>
    </div>
  )
}
