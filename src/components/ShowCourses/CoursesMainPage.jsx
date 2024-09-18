import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Importamos react-slick
import { db } from '../../firebase/firebase';
import './CoursesMainPage.css';
import { collection, getDocs } from "firebase/firestore";

const CoursesMainPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      const coursesCollecionRef = collection(db, 'cursos')

      try {
        // Obtener URLs de los archivos y metadatos
        const snapshot = await getDocs(coursesCollecionRef);
        const coursesData = snapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))
        setCourses(coursesData);
      } catch (error) {
        console.error("Error al obtener los cursos: ", error);
      }
    };
    fetchCourses();
  }, []);

  // Configuración del carrusel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostramos 3 cursos a la vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Pantallas grandes
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768, // Pantallas medianas (tablets)
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480, // Pantallas pequeñas (móviles)
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="flex flex-col items-center mt-4">
      <h1 className="text-2xl text-white font-bold mb-8 mt-8">Cursos Disponibles</h1>
      {courses.length === 0 ? (
        <p>No hay cursos disponibles</p>
      ) : (
        <Slider {...settings} className="w-full max-w-6xl"> {/* Añadimos el carrusel */}
          {courses.map((course, index) => (
            <div key={index} className="p-4">
              <li className="card flex-none border rounded-xl text-center mx-auto">
              <p className="text-2xl font-bold mb-4 mt-4">{course.title}</p> {/* Título más grande y en negrita */}
              <p>{course.description}</p>
              </li>
            </div>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CoursesMainPage;
