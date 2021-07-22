import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from '../images/imagen1.jpg';
import image2 from '../images/imagen2.jpg';
import image3 from '../images/imagen3.jpg';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UncontrolledLottie from '../Components/UncontrolledLottie';



const Propuestas = () => {
    return (
        <div className='contenedor'>
            <div className='titulo-propuesta'>
                <h1>NUESTROS OBJETIVOS</h1>
            </div>
            <AliceCarousel infinite autoPlay="500">
                <img src={image1} className="sliderimg" style={{ maxWidth: '100%', height: 'auto' }} alt="" />
                <img src={image2} className="sliderimg" style={{ maxWidth: '100%', height: 'auto' }} alt="" />
                <img src={image3} className="sliderimg" style={{ maxWidth: '100%', height: 'auto' }} alt="" />
            </AliceCarousel>

          
                <h2>Propositos</h2>
                <ul className='list'>
                <li>Educacion</li>
                <li>Salud</li>
                <li>Deportes</li>
                <li>Infraestructura</li>
                </ul>
                <UncontrolledLottie/>
               
    
            <footer>
                <p>Gustavo Andres Guio Barrera</p>
                <p class="copyrigth">&copy;2021 Todos los derechos reservados</p>
                <div className='top-redes'>
                        <a href="https://www.youtube.com/channel/UC7gilKuSRhW1XyGF-D6LGVg">
                            <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '2.0rem', color: 'white' }} />
                        </a>

                        <a href="https://www.facebook.com/jduc19/">
                            <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '2.0rem', color: 'white' }} />
                        </a>

                        <a href="https://www.instagram.com/jduc19/?hl=es-la">
                            <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '2.0rem', color: 'white' }} />
                        </a>

                        <a href="https://www.instagram.com/jduc19/?hl=es-la">
                            <FontAwesomeIcon icon={faWhatsapp}  style={{ fontSize: '2.0rem', color: 'white' }} />
                        </a>
                    </div>
               
            </footer>

        </div>
    );
};

export default Propuestas;