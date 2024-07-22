import React from "react";

const Cursos = () => {
  return (
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl xl:text-5xl mt-4">
          Mejora tus habilidades con el Tarot
        </h2>
        <p className="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
          Inicia y mejora tus lecturas con este curso especializado
        </p>
      </div>
      <div className="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
        {/* Feature 1 */}
        <div className="md:p-8 lg:p-14 flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
            <i className="fa-solid fa-chart-column text-3xl text-white"></i>
          </div>
          <h3 className="mt-12 text-xl font-bold text-white">
            Fundamentos del Tarot
          </h3>
          <p className="mt-5 text-base text-gray-600">
           Maneja los principios básicos de la lectura del Tarot
          </p>
        </div>

        {/* Feature 2 */}
        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
            <i className="fa-solid fa-truck-fast text-3xl text-white"></i>
          </div>
          <h3 className="mt-12 text-xl font-bold text-white">
            Técnicas avanzadas
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Explora técnicas avanzadas de tarot, incluyendo lecturas más complejas
          </p>
        </div>

        {/* Feature 3 */}
        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
            <i className="fa-solid fa-shield text-3xl text-white"></i>
          </div>
          <h3 className="mt-12 text-xl font-bold text-white">
            Lectura intuitiva
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Mejora tu intuición y desarrolla tu habilidad para leer las cartas a un nivel más profundo.
          </p>
        </div>

        {/* Feature 4 */}
        <div className="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
            <i className="fa-solid fa-cloud text-3xl text-white"></i>
          </div>
          <h3 className="mt-12 text-xl font-bold text-white">
            Tarot y Astrología
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Integra la lectura de tarot con la astrología para obtener una visión más completa.
          </p>
        </div>

        {/* Feature 5 */}
        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
            <i className="fa-solid fa-pen-nib text-3xl text-white"></i>
          </div>
          <h3 className="mt-12 text-xl font-bold text-white">
            Tarot para el Crecimiento Personal
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Usa el tarot como una herramienta para el desarrollo personal y el autoconocimiento.
          </p>
        </div>

        {/* Feature 6 */}
        <div className="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
            <i className="fa-solid fa-bolt text-3xl text-white"></i>
          </div>
          <h3 className="mt-12 text-xl font-bold text-white">
            Tarot para las Relaciones
          </h3>
          <p className="mt-5 text-base text-gray-600">
            Explora cómo el tarot puede proporcionar perspectivas sobre las relaciones y mejorar tus conexiones.
          </p>
        </div>
      </div>
    </div>
  );
};


export default Cursos;
