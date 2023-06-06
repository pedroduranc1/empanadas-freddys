"use client";

import Card from "@/components/Card";
import Form from "@/components/Form";
import Input from "@/components/Input";

import styles from "../css/main.module.css";
import { useState, useEffect } from "react";
import { Empanadas } from "@/api/Empanadas";
import Button from "@/components/Button";

const empanadasCtrl = new Empanadas();

export default function Home() {
  const [Empanadas, setEmpanadas] = useState(null);
  const [refresh, setrefresh] = useState(false)

  const [modEmpanada, setmodEmpanada] = useState(null)

  useEffect(() => {
    (async () => {
      const { data } = await empanadasCtrl.getEmpanadas();
      setEmpanadas(data);
    })();
  }, [refresh]);

  return (
    <>
      <h1 className="text-center text-4xl text-white">INICIO</h1>

      <div className={...styles.form}>
        <Form setrefresh={setrefresh} modEmpanada={modEmpanada}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3">
              <Input type="text" name="nombre" placeholder={modEmpanada ? modEmpanada?.attributes.nombre : ""}  />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <Input type="number" name="Cantidad" placeholder={modEmpanada ? modEmpanada?.attributes.cantidad : ""} />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <Input type="number" name="Precio" placeholder={modEmpanada ? modEmpanada?.attributes.precio : ""} />
            </div>
          </div>
          {
            modEmpanada != null ? (<Button type="submit">Actualizar</Button>) : (<Button type="submit" onClick={()=>{setrefresh(!refresh)}}>Enviar</Button>)
          }
          {/* <Button type="submit" onClick={()=>{setrefresh(!refresh)}}>Enviar</Button> */}
        </Form>

        {/* MOSTRAR LAS EMPANADAS QUE TENGO */}
        <h2 className="text-white text-2xl text-center my-10 font-bold uppercase">
          Empanadas
        </h2>

        <div className="grid place-content-center gap-4 grid-cols-4">
          {/* COMPENTE CARTA DE EMPANADA */}
          {Empanadas?.map((empanada) => (
            <Card key={empanada.id} modEmpanada={setmodEmpanada} setrefresh={setrefresh} empanadaInfo={empanada} />
          ))}
        </div>
      </div>
    </>
  );
}
