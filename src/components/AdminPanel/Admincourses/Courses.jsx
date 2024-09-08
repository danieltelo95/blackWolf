import React, { useState } from "react";
import { db, storage } from '../../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';


const Admincourses = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);

    const handleFilechange = (e) => {
        setFile(e.target.files[0])
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let fileURL = '';
            if(file){
                const storageRef = ref(storage, `cursos/${file.name}`);
                const snapshot = await uploadBytes(storageRef, file);
                fileURL = await getDownloadURL(snapshot.ref)
            }

            await addDoc(collection(db, 'cursos'), {
                title,
                description,
                price,
                fileURL,
                createAt: new Date(),
            });

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
}

export default Admincourses;