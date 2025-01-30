import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./CardDetail.css";

const CardDetail = () => {
  const { cardName } = useParams();
  const [card, setCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState("");

  useEffect(() => {
    const fetchCardDetails = async () => {
      const url = "https://tarot-api-es.vercel.app/api/v1/cards";

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error al obtener los datos");
        }
        const data = await response.json();
        const selectedCard = data.cards.find((card) => card.name === cardName);
        setCard(selectedCard);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchCardDetails();
  }, [cardName]);

  if (!card) {
    return <p>Cargando la carta...</p>;
  }

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalContent("");
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center mt-20 mb-20">
      {/* Imagen de la Carta */}
      <div className="md:w-1/3 flex justify-center">
        <div className="detail-card">
          <div className="front">
            <div className="detail-card-top">
              <p className="detail-card-top-para">{card.name}</p>
            </div>
            <div className="image-container">
              <img
                src={card.image}
                alt={card.name}
                className="detail-card-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contenedor de los botones (Debajo en pantallas pequeñas, al lado en grandes) */}
      <div className="buttons-container md:w-1/3 md:ml-10">
        <button onClick={() => handleOpenModal(card.salud)}>Salud</button>
        <button onClick={() => handleOpenModal(card.amor)}>Amor</button>
        <button onClick={() => handleOpenModal(card.finanzas)}>Finanzas</button>
        <button onClick={() => handleOpenModal(card.trabajo)}>Trabajo</button>
        <button onClick={() => handleOpenModal(card.espiritualidad)}>
          Espiritualidad
        </button>
      </div>

      {/* Modal */}
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
    </div>
  );
};

export default CardDetail;
