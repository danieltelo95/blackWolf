import React, { useState, useEffect } from "react";
import './Info.css'
import Slider from "react-slick";

function Info() {

    const [cards, setCards] = useState([]);

    useEffect(() => {
    
      const fetchData = async () =>{        
        const url = 'https://tarot-api-es.vercel.app/api/v1/cards'
        try {
          const response = await fetch(url);
          
          if(!response.ok){
            throw new Error('Error al obtener los datos')
          }
          const json = await response.json();         
          const data = json.cards.map(card => card)
          setCards(data)
          console.log(data);
          
        } catch (error) {
          console.error(error.message);
        }
      }; fetchData();
    }, []);

    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4, // Mostramos 4 cartas a la vez
      centerMode: false, // Deshabilitamos el centrado (evitar el espacio a los lados)
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024, // Pantallas grandes
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768, // Pantallas medianas (tablets)
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 480, // Pantallas pequeñas (móviles)
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    };
    
    return (
      <div className="flex flex-col items-center mt-4 mb-16">       
          <Slider {...settings} className="w-full max-w-6xl"> {/* Añadimos el carrusel */}
            {cards.map((card, index) => (
              <div key={index} className="p-4">
                <li className="container flex-none text-center mx-auto">
                <div className="cards" key={index}>
                  <div className="front ">
                    <div className="card-top">
                      <p className="card-top-para">{card.name}</p>
                    </div>
                    <div className="image-container ">
                      <img
                        src={card.image}
                        alt={card.name}
                        className="card-image"
                      />
                    </div>
                  </div>
                  <div className="back">
                    <p className="heading">{card.meaning_up}</p>
                  </div>
                </div>
                </li>
              </div>
            ))}
          </Slider>
      </div>
    );
  };
  export default Info;