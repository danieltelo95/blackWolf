// addCourse.js
import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';

const addCourse = async (course) => {
  try {
    const docRef = await addDoc(collection(db, 'courses'), course);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

// Llamadas a addCourse para agregar los cursos iniciales
addCourse({ 
  title: "Curso de Tarot Básico", 
  description: "Aprende los fundamentos del Tarot.", 
  pdfUrl: "/courses/Daniel Quinayás Tello CV 2024-2.pdf"
});

addCourse({ 
  title: "Curso de Tarot Avanzado", 
  description: "Profundiza en las técnicas avanzadas del Tarot.", 
  pdfUrl: "/courses/No Country - Simulacion Laboral Tech.pdf"
});

addCourse({ 
  title: "Curso de Interpretación de Tarot", 
  description: "Aprende a interpretar las cartas del Tarot.", 
  pdfUrl: "/courses/Pandablue 2024.pdf"
});
