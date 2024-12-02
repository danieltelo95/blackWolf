import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Importamos react-slick
import { db } from '../../firebase/firebase';
import { collection, getDocs } from "firebase/firestore";
import './CoursesMainPage.css'

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
      <h1 className="titulo">
        Domina el arte de la <br /> Lectura del <span className="highlight">Tarot</span>
      </h1>
      <h2 className="text-2xl text-white font-bold mb-8 mt-8">Cursos Disponibles</h2>
      {courses.length === 0 ? (
      <div class="pyramid-loader">
        <div class="wrapper">
          <span class="side side1"></span>
          <span class="side side2"></span>
          <span class="side side3"></span>
          <span class="side side4"></span>
          <span class="shadow"></span>
        </div>  
      </div>
      ) : (
        <Slider {...settings} className="w-full max-w-6xl"> {/* Añadimos el carrusel */}
          {courses.map((course, index) => (
            <li>                            
            <div key={index} className="container">
                <div className="box">
                    <span className="title">{course.title}</span>
                    <div>
                        <span>{course.description}</span>                            
                    </div>
                </div>
            </div>
        </li>
          ))}
        </Slider>
      )}
    </div>
  );
};

export default CoursesMainPage;
