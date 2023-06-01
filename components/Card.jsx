const Card = ({empanadaInfo}) => {
  return (
    <div className="bg-white rounded-md cursor-pointer overflow-hidden">
      <img
        className="w-[200px] h-auto rounded-t-md"
        src="https://www.cocinayvino.com/wp-content/uploads/2019/07/Empanadas-venezolanas-por-simplebeautifulfood-1-e1563819005356-696x485.jpg"
        alt="empanada"
      />

      <div className="p-2 ">
        <h2 className="text-center text-lg">Empanda de {empanadaInfo.nombre}</h2>
        <h3 className="text-center text-base">Precio: {empanadaInfo.precio}</h3>
        <p className="text-center text-sm">{empanadaInfo.descripcion}</p>
      </div>
    </div>
  );
};

export default Card;
