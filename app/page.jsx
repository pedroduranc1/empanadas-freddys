"use client";

import Form from "@/components/Form";
import Input from "@/components/Input";

export default function Home() {
  return (
    <>
      <h1 className="text-center text-4xl text-white">INICIO</h1>

      <div className="w-full mt-10 grid place-content-center">
        <Form>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3">
              <Input type="text" name="Empanada" placeholder="Queso" />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Input type="number" name="Cantidad" placeholder="1" />
            </div>
          </div>
        </Form>
      </div>
    </>
  );
}
