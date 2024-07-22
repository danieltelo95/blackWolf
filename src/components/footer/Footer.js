import React from 'react';
import whatsapp from '../../assets/images/whatsapp.png';
import instagram from '../../assets/images/instagram.png';

const Footer = () => {
  return (
    <footer className="text-white py-8 mt-8"> 
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full sm:w-1/3 px-4 mb-6 sm:mb-0">
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <ul className="list-none">
            <li className="mb-2 flex items-center">
              <img src={whatsapp} alt="WhatsApp" className="w-6 h-6 mr-2" />
              <a href="https://wa.link/8qd5ak" className="hover:underline">WhatsApp</a>
            </li>
            <li className="mb-2 flex items-center mb-8">
              <img src={instagram} alt="Instagram" className="w-6 h-6 mr-2" />
              <a href="https://www.instagram.com/andrewtarot99?igsh=c3U0b2ptczk4N3A2" className="hover:underline">Instagram</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
