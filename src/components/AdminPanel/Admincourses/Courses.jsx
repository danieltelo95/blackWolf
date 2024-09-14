import React, { useState } from "react";
import { db, storage } from '../../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';  // Importa el servicio de autenticación

const Admincourses = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);

    const handleFilechange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Verificar si el usuario está autenticado
        const auth = getAuth();  // Obtener instancia de autenticación
        console.log("authenticacion: ", auth);                
        const user = auth.currentUser;  // Obtener el usuario actual
        console.log("user: ", user);
        

        if (!user) {
            alert('Debes estar autenticado para subir un curso.');  // Si no está autenticado, mostrar alerta
            return;  // Salir de la función para no proceder con la subida
        }

        try {
            let fileURL = '';
            if (file) {
                const storageRef = ref(storage, `cursos/${file.name}`);
                console.log("storageRef: ", storageRef);                                
                const snapshot = await uploadBytes(storageRef, file);
                console.log("snapshot: ", snapshot);                
                fileURL = await getDownloadURL(snapshot.ref);
                console.log("fileURL: ", fileURL);                
            }

            // Agregar el documento a Firestore
            await addDoc(collection(db, 'cursos'), {
                title,
                description,
                price,
                fileURL,
                createAt: new Date(),
                userId: user.uid  // Puedes registrar el ID del usuario que sube el curso
            });

            console.log("addDoc: ", addDoc);            
            alert('Curso subido correctamente');

        } catch (error) {
            console.error('Error al subir el curso: ', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                placeholder="Titulo del curso"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Descripción del curso"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <input
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
            />
            <input type="file" onChange={handleFilechange} />
            <button type="submit">Subir curso</button>
        </form>
    );
};

export default Admincourses;
