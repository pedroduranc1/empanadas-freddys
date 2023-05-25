"use client";

import Form from "@/components/Form";
import Input from "@/components/Input";
import Select from "@/components/Select";
import React, { useState } from "react";

const page = () => {

  const [Estados] = useState([
    {
      id: 1,
      estado:"Zulia"
    },
    {
      id: 2,
      estado:"Tachira"
    },
    {
      id: 3,
      estado:"Caracas"
    },
    {
      id: 4,
      estado:"Margarita"
    },
  ])
  return (
    <>
      <div className="grid place-content-center text-4xl text-white">
        Cliente Page
      </div>

      <div className="w-full mt-10 grid place-content-center">
        <Form>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Input type="text" name="Nombre" placeholder="Peter"/>
              {/* ERROR */}
              {/* <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Input type="text" name="Apellido" placeholder="Pan"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <Input type="password" name="Password" placeholder="******************"/>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Input type="text" name="Ciudad" placeholder="Cabimas"/>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Select name="Estado" estados={Estados} />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <Input type="text" name="Codigo_Postal" placeholder="90230"/>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default page;
