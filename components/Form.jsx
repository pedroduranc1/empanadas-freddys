"use client";

import React from "react";
import { Empanadas } from "@/api/Empanadas";

const empanadasCtrl = new Empanadas();

const Form = ({ children, modEmpanada,setrefresh }) => {
  const ObtenerData = async (e) => {
    //NO ME ACTUALIZA LA PAGINA
    e.preventDefault();

    //OBTENER LA INFO DEL FORMULARIO
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    if (modEmpanada != null) {
      let infovieja = modEmpanada;
      let infonueva = data;

      let dataUpdate = {
        id: infovieja.id,
        nombre:
          infonueva.nombre == ""
            ? modEmpanada.attributes.nombre
            : infonueva.nombre,
        precio:
          infonueva.Precio == ""
            ? modEmpanada.attributes.precio
            : infonueva.Precio,
      };
      await empanadasCtrl.updateEmpanada(dataUpdate.id,dataUpdate);
      LimpiarData();
      setrefresh((prevState)=> !prevState)
    } else {
      //INFO
      await empanadasCtrl.createEmpanada(data);
      LimpiarData();
      setrefresh((prevState)=> !prevState)

    }
  };

  const LimpiarData = () => {
    //LIMPIAR EL FORMULARIO
    let FormReset = document.getElementById("FormReset");

    FormReset.reset();
  };

  return (
    <form
      onSubmit={ObtenerData}
      id="FormReset"
      className="w-full mx-auto grid place-content-center bg-slate-100 rounded-md p-4 max-w-lg"
    >
      {children}
    </form>
  );
};

export default Form;
