import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const CoursesMainPage = () => {
  const [courses, setCourses] = useState([]);
  
  // Asegúrate de configurar el storage correctamente
  const storage = getStorage(undefined, 'gs://blackwolf-c3f7c.appspot.com'); // O usa getStorage(undefined, "gs://nombre-de-tu-bucket")

  useEffect(() => {
    const fetchCourses = async () => {
      // Referencia a la carpeta "courses/" en tu Storage
      const storageRef = ref(storage, "cursos/");
      try {
        const result = await listAll(storageRef);
        console.log("result: ", result); // Verifica que la consulta está devolviendo datos

        // Obtener URLs de los archivos
        const courseUrls = await Promise.all(
          result.items.map(async (itemRef) => {
            const url = await getDownloadURL(itemRef);
            return {
              name: itemRef.name,
              url: url,
            };
          })
        );
        setCourses(courseUrls);
      } catch (error) {
        console.error("Error al obtener los cursos: ", error);
      }
    };
    fetchCourses();
  }, [storage]);

  return (
    <div>
      <h1>Cursos Disponibles</h1>
      {courses.length === 0 ? (
        <p>No hay cursos disponibles</p>
      ) : (
        <ul>
          {courses.map((course, index) => (
            <li key={index}>
              {course.name} - <a href={course.url} target="_blank" rel="noopener noreferrer">Ver curso</a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoursesMainPage;
