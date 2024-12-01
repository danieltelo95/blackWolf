import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import './CardDetail.css'

const CardDetail = () => {

    const { cardName } = useParams();
    const [card, setCard] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    useEffect(() => {
      const fetchCardDetails = async () => {
        const url = 'https://tarot-api-es.vercel.app/api/v1/cards'

        try {
            const response = await fetch(url)
            if(!response.ok){
                throw new Error("Error al obtener los datos");
            }
            const data = await response.json();
            const selectedCard = data.cards.find((card) =>
                card.name === cardName);
                setCard(selectedCard);
        } catch (error) {
            console.error(error.message);
        }
      }; fetchCardDetails();
    }, [cardName]);

    if(!card) {
        return <p> Cargando la carta</p>
    }

    const handleOpenModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    }
  
    return (
        <ul className="grid grid-cols-5 grid-rows-1 mt-20 mb-20">    
            {/* Columna de la Imagen */}
            <div className="col-start-2">
                <div className="detail-card">
                    <div className="front">
                        <div className="detail-card-top">
                        <p className="detail-card-top-para">{card.name}</p>
                        </div>
                        <div className="image-container ">
                        <img
                            src={card.image}
                            alt={card.name}
                            className="detail-card-image"
                        />
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-start-4">
                {/* Columna de los Botones */}
                <div className="buttons-container">
                    <button onClick={() => handleOpenModal(card.salud)}>Salud</button>
                    <button onClick={() => handleOpenModal(card.amor)}>Amor</button>
                    <button onClick={() => handleOpenModal(card.finanzas)}>Finanzas</button>
                    <button onClick={() => handleOpenModal(card.trabajo)}>Trabajo</button>
                    <button onClick={() => handleOpenModal(card.espiritualidad)}>
                        Espiritualidad
                    </button>
                </div>
            </div>
        {isModalOpen && (
            <div className="modal">
                <div className="modal-content">
                    <button className="close-button" onClick={handleCloseModal}>
                        &times;
                    </button>
                    <p>{modalContent}</p>
                </div>
            </div>
        )}
            
        </ul>
    );    
}

export default CardDetail;