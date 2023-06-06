import { Empanadas } from "../api/Empanadas";

const empanadasCtrl = new Empanadas()

const Card = ({empanadaInfo,modEmpanada,setrefresh}) => {

  const {attributes:empanada} = empanadaInfo;

  const actualizar = () => {
    modEmpanada(empanadaInfo)
  }

  const eliminar = async () => {
    empanadasCtrl.deleteEmpanada(empanadaInfo.id);
    setrefresh((prevState)=> !prevState)
  }

  return (
    <div className="bg-white rounded-md overflow-hidden">
      <img
        className="w-[200px] h-auto rounded-t-md"
        src="https://www.cocinayvino.com/wp-content/uploads/2019/07/Empanadas-venezolanas-por-simplebeautifulfood-1-e1563819005356-696x485.jpg"
        alt="empanada"
      />

      <div className="p-2 ">
        <h2 className="text-center text-lg">Empanda de {empanada.nombre}</h2>
        <h3 className="text-center text-base">Precio: {empanada.precio}</h3>
        <p className="text-center text-sm">{empanada.descripcion}</p>
      </div>

      <div className="flex justify-between items-center px-3 py-2">
        <button 
        onClick={actualizar}
        className="rounded-md px-2 py-2 bg-blue-400 text-white"
        >Actualizar</button>
        <button 
        onClick={eliminar}
        className="rounded-md px-2 py-2 bg-red-400 text-white"
        >Eliminar</button>
      </div>
    </div>
  );
};

export default Card;
