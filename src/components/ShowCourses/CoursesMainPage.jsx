import React, { useEffect, useState } from "react";
import { getStorage, ref, listAll, getDownloadURL, getMetadata } from "firebase/storage";
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

  return (
    <div>
      <h1 className="text-xl font-bold mb-4 mt-4">Cursos Disponibles</h1>
      {courses.length === 0 ? (
        <p>No hay cursos disponibles</p>
      ) : (
        <ul className="flex flex-wrap gap-4">
          {courses.map((course, index) => (
            <li className="card flex-none w-64 p-4 border rounded-lg shadow-md" key={index}>
                <div className="align">
                    <span className="red"></span>
                    <span className="yellow"></span>
                    <span className="green"></span>
                </div>
                <p className="text-lg font-medium">{course.title}</p>
                <p>{course.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CoursesMainPage;
