import React from "react";
import justicia from '../../assets/images/justicia-tarot.jpg';
import loco from '../../assets/images/loco-tarot.jpg';
import muerte from '../../assets/images/muerte-tarot.jpg';
import './Info.css'

const Info = () => {

    const tarjetas = [
        { 
            name: 'La Justicia', 
            description: 'Description for card 1',
            image: justicia
        },
        { 
            name: 'La Santa Muerte', 
            description: 'Description for card 2',
            image: muerte
        },
        { 
            name: 'El Loco', 
            description: 'Description for card 3',
            image: loco
        },
    ]

    return (
        <div>
          <div className="container flex space-x-16 justify-center mb-40">
            {tarjetas.map((card, index) => (
              <div className="cards" key={index}>
                <div className="front">
                    <div className="card-top">
                        <p className="card-top-para">{card.name}</p>
                    </div>
                    <div className="image-container">
                        <img src={card.image} alt={card.name} className="card-image" />
                    </div>
                </div>
                <div className="back">
                  <p className="heading">{card.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
    );
      
}

export default Info;