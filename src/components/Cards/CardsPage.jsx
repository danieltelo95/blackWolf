import React, { useState, useEffect } from "react";
import './CardsPage.css'
import { Link } from "react-router-dom";

const CardsPage = () => {

    const [cards, setCards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    useEffect(() => {
          
        const fetchCards = async () => {
            const url = 'https://tarot-api-es.vercel.app/api/v1/cards'
            
            try {
                const response = await fetch(url)
                if(!response.ok) {
                    throw new Error("Error al obtener los datos");                    
                }
                const json = await response.json();
                const data = json.cards.map(card => card)
                setCards(data)
            } catch (error) {
                console.error(error.message);   
            }
      }; fetchCards();
    }, [])

    //Indice de los primeros y ultimos elementos en la pagina
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;

    //Elementos a mostrar en pag actual
    const currentCards = cards.slice(indexOfFirstItem, indexOfLastItem);

    //Numero total de paginas
    const totalPages = Math.ceil(cards.length / itemsPerPage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <div className="flex flex-col items-center mt-4 mb-16">   
            <ul className="cards-list">
              {currentCards.map((card, index) => (
                <div key={index} className="p-4">
                  <li className="container flex-none text-center mx-auto">
                  <div className="tarotcard" key={index}>
                    <div className="front">
                      <div className="tarotcard-top">
                        <p className="tarotcard-top-para">{card.name}</p>
                      </div>
                      <div className="image-container ">
                        <img
                          src={card.image}
                          alt={card.name}
                          className="tarotcard-image"
                        />
                      </div>
                    </div>
                    <div className="back">
                      <button className="card-button">
                            <Link to={`/card/${card.name}`}>
                                Significados
                            </Link>                        
                        </button>
                    </div>
                  </div>
                  </li>
                </div>
              ))}
            </ul>    
            {/* Pagination*/}
            <div className="pagination mt-4">
              <button 
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                Anterior
              </button>
              {Array.from( {length: totalPages}, (_, index) => index + 1).map(
                (pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={currentPage === pageNumber ? 'active' : ""}
                  >
                    {pageNumber}
                  </button>
                )
              )}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled = {currentPage === totalPages}
              >
                Siguiente
              </button>
            </div>
        </div>
      );
    

    

}

export default CardsPage;