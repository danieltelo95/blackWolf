// src/components/Courses/Courses.js
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase.js';
import { setCourses } from '../../store/actions/actions';

const Courses = () => {
  const dispatch = useDispatch();
  const courses = useSelector(state => state.courses);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'courses'));
        const coursesData = querySnapshot.docs.map(doc => doc.data());
        console.log('Fetched courses data:', coursesData); // Debugging line
        dispatch(setCourses(coursesData));
        setLoading(false);
      } catch (error) {
        console.error('Error fetching courses: ', error);
        setLoading(false);
      }
    };
    fetchCourses();
  }, [dispatch]);

  if (loading) {
    return <div>Cargando los cursos...</div>;
  }

  return (
    <div>
      <h2>Cursos Disponibles</h2>
      <ul>
        {courses.map((course, index) => (
          <li key={index}>
            <h3>{course.title}</h3>
            <p>{course.description}</p>
            <a href={course.pdfUrl} target="_blank" rel="noopener noreferrer">DESCARGAR PDF</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
