"use client";

import React from 'react'
import { Empanadas } from '@/api/Empanadas';

const empanadasCtrl = new Empanadas();

const Form = ({children}) => {

    const ObtenerData = async (e) => {
        //NO ME ACTUALIZA LA PAGINA
        e.preventDefault()

        //OBTENER LA INFO DEL FORMULARIO
        const form = e.currentTarget
        const formData = new FormData(form)
        const data = Object.fromEntries(formData.entries())

        //INFO 
        await empanadasCtrl.createEmpanada(data)
        LimpiarData()
    }


    const LimpiarData = () => {
        //LIMPIAR EL FORMULARIO
        let FormReset = document.getElementById("FormReset")

        FormReset.reset()
    }

  return (
    <form onSubmit={ObtenerData} id='FormReset' className="w-full mx-auto grid place-content-center bg-slate-100 rounded-md p-4 max-w-lg">
        {children}
    </form>
  )
}

export default Form