import React, { useState } from "react";
import { db, storage } from '../../../firebase/firebase';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { collection, addDoc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const Admincourses = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleFilechange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        const auth = getAuth();
        const user = auth.currentUser;

        if (!user) {
            setError('Debes estar autenticado para subir un curso.');
            setLoading(false);
            return;
        }

        if (!title || !description || !price || !file) {
            setError('Todos los campos deben ser completados.');
            setLoading(false);
            return;
        }

        try {
            let fileURL = '';
            if (file) {
                const storageRef = ref(storage, `cursos/${file.name}`);
                const metadata = {
                    customMetadata: {
                        description,
                        title,
                        price,
                    },
                };
                const snapshot = await uploadBytes(storageRef, file, metadata);
                fileURL = await getDownloadURL(snapshot.ref);
            }

            await addDoc(collection(db, 'cursos'), {
                title,
                description,
                price,
                fileURL,
                createAt: new Date(),
                userId: user.uid
            });

            alert('Curso subido correctamente');
            setTitle('');
            setDescription('');
            setPrice('');
            setFile(null);
        } catch (error) {
            setError('Error al subir el curso: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4 p-4 border rounded-lg shadow-md">
            {error && <p className="text-red-500">{error}</p>}
            <input 
                type="text"
                placeholder="Titulo del curso"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <textarea
                placeholder="Descripción del curso"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <input
                type="number"
                placeholder="Precio"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <input 
                type="file" 
                onChange={handleFilechange}
                className="w-full p-2 border rounded"
            />
            <button 
                type="submit" 
                disabled={loading}
                className={`w-full p-2 border rounded ${loading ? 'bg-gray-400' : 'bg-blue-500 text-white'}`}
            >
                {loading ? 'Subiendo...' : 'Subir curso'}
            </button>
        </form>
    );
};

export default Admincourses;
