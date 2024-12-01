import React, { useEffect, useState } from "react";
import { db } from '../../firebase/firebase';
import { collection, getDocs } from "firebase/firestore";
import './Courses.css'

const Courses = () => {

    const [course, setCourse] = useState([]); 

    useEffect(() => {
        const fetchCourses = async () => {
            const coursesCollection = collection(db, 'cursos')

            try {
                const getCourses = await getDocs(coursesCollection)
                const courseData = getCourses.docs.map(doc => ({
                    ...doc.data(),
                    id: doc.id
                }))
                setCourse(courseData)
            } catch (error) {
                console.error('Error al obtener los cursos: ', error);            
            }
        };
        fetchCourses();
    }, []);

        return(
            <div class="mb-40">
                <h1 class="text-white font-bold text-3xl mt-6 mb-8 text-center">Accede a mis cursos</h1>
                <ul className="courses-list">
                    {course.map((course, index) => ( 
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
                </ul>
            </div>
        )

}

export default Courses;