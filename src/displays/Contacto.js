import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UncontrolledLottie1 from '../Components/UncontrolledLottie1';

function ContactForm() {

    
    const [state, handleSubmit] = useForm("xqkwqnqa");
    if (state.succeeded) {
        return <p>Gracias por tu mensaje!!</p>;
    }
    return (

        <form
            method="POST" id="yeisonivanserna@gmail.com"
            action="https://formspree.io/f/xqkwqnqa"
            onSubmit={handleSubmit}>

            <div className='contenedor-form'>

                <div className='row'>
                <div class="col-25">
                    <label htmlFor="full-name">Nombre</label>
                </div>
                <div class="col-75">
                    <input type="text"
                        name="name"
                        id="full-name"
                        placeholder="Nombre y Apellido"
                        required="value"> 
                    </input>
                    </div>
                </div>

                <div className='row'>
                <div class="col-25">
                    <label htmlFor="cedula">Cedula</label>
                </div>
                <div class="col-75">
                    <input type="text"
                        name="name"
                        id="cedula"
                        placeholder="No de cedula"
                        required="value"> 
                    </input>
                    </div>
                </div>

                <div className='row'>
                <div class="col-25">
                    <label  htmlFor="email">
                        Correo
                    </label>
                    </div>
                    <div class="col-75">
                    <input
                        type='text'
                        name='name'
                        id='full-name'
                        placeholder='email@domain.com'
                        required='value1'
                    />
                    </div>
                </div>

               {/**  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />*/}

                <div className='row'>
                <div class="col-25">
                    <label  htmlFor="celular">
                        Celular
                    </label>
                    </div>
                    <div class="col-75">
                    <input
                        type='text'
                        name='name'
                        id='full-name'
                        placeholder='300 123 4567'
                        required='value2'
                    />
                    </div>
                </div>
                
                <div className='row'>
                <div class="col-25">
                    <label for="department">Opciones</label>
                    </div>
                    <div class="col-75">
                    <select name="department" id="department" required="">
                        <option value="Select" selected="" disabled="">Select</option>
                        <option value="Aportes">Aportes</option>
                        <option value="Reuniones">Reuniones</option>
                        <option value="Publicidad">Publicidad</option>
                        <option value="Denuncias">Denuncias</option>
                    </select>
                    </div>
                </div>
            

                <div className='row'>
                <div class="col-25">
                    <label  htmlFor="message">Mensaje</label>
                    </div>
                    <div class="col-75">
                    <textarea
                        rows="8"
                        cols="80"
                        id="message"
                        name="message"
                        placeholder="Aenean lacinia bibendum nulla sed consectetur. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Donec ullamcorper nulla non metus auctor fringilla nullam quis risus."
                    />
                    </div>
                </div>
                

              {/**  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />*/} 
                <div className='row'>
                    <button type="submit" disabled={state.submitting}>
                        Enviar
                        <UncontrolledLottie1/>
                    </button>
                   
                </div>

            </div>
           
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

        </form>

    );
}

const Contacto = () => {
    return (
        <div>
            <h1>CONTACTANOS</h1>
            <ContactForm></ContactForm>
        </div>
    );
};

export default Contacto;