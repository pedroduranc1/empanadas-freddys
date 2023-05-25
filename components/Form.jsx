"use client";

import React from 'react'
import Button from './Button'

const Form = ({children}) => {

    const ObtenerData = (e) => {
        //NO ME ACTUALIZA LA PAGINA
        e.preventDefault()

        //OBTENER LA INFO DEL FORMULARIO
        const form = e.currentTarget
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        //INFO 
        //console.log(data)
        LimpiarData()

    }


    const LimpiarData = () => {
        //LIMPIAR EL FORMULARIO
        let FormReset = document.getElementById("FormReset")

        FormReset.reset()
    }

  return (
    <form onSubmit={ObtenerData} id='FormReset' className="w-full bg-slate-100 rounded-md p-4 max-w-lg">
        {children}
        <Button/>
    </form>
  )
}

export default Form