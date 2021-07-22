import React from 'react';
import candidato from '../images/candidato.jpg';
import { faFacebook, faInstagram, faYoutube, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UncontrolledLottie3 from '../Components/UncontrolledLottie3';

const Biografia = () => {
    return (

        <div className='body'>
            {/* <div className='titulo'>
                <h1>MI HISTORIA</h1>
            </div>*/}
            <div className='intro'>
                <div className='contenedor'>
                    <div className='candidato'>
                        <img src={candidato} alt='candidato'></img>
                    </div>
                    <div className='parrafo-1'>
                        <p>MI HISTORIA</p>
                        <h3>Abogado y Especialista en Derecho Administrativo</h3>
                        <p>Gustavo Andres Guio Barrera</p>
                        <p>Nacido en Bucaramanga, el 14 de mayo de 1982, hijo de Néstor Guío Sánchez y Amparo Barrera Diaz, casado con Nubia Stella León Gómez, padre de dos hijos, Camilo Andrés y Juan David. Estudié la primaria en la concentración escolar San Pablo ubicada en el Barrio Bucaramanga, graduado de secundaria como Bachiller Técnico Comercial y por convenio con el SENA con certificado de Aptitud Ocupacional como procesador de datos contables; lo anterior, me permitió adelantar practicas empresariales en la Alcaldía Municipal de Floridablanca, iniciando desde allí en la secretaría de educación municipal los primeros pasos para estructurar la vocación por el servicio público.</p>
                        <UncontrolledLottie3/>
                    </div>
                </div>
            </div>

            <div className='parrafo-2'>
                <p>Para poder terminar mis estudios de secundaria, fui ayudante de construcción, ayudante de zapatería, vendedor de empanadas, tortas y artesanías navideñas. Una vez graduado de bachiller, con la meta personal de ayudar a la familia a salir adelante tuve que suspender la inscripción en la universidad, e iniciar una vez cumplidos los 18 de años de edad a laborar en la empresa REDIBA S.A. E.S.P., como operador de barrido en el Municipio de Bucaramanga, y luego en METROASEO S.A. E.SP, como recolector de residuos sólidos, experiencia que me dio la oportunidad de conocer de cerca una de las labores mas sensibles e importantes para el disfrute de nuestro espacio público limpio y agradable.</p>
            </div>

            <div className='parrafo-3'>
                <p>Culminado un ciclo como barrendero y recolector de basura, inicié una empresa de mensajería y domicilios en Bucaramanga, luego vigilante en el Club Campestre de Bucaramanga, preventista en LECHESAN, donde conocí a mi esposa, posteriormente ingresé a laborar como auxiliar de archivo en el Consejo Profesional Nacional de Ingeniería – COPNIA, entidad en la cual estuve vinculado por el lapso de cinco años, al mismo tiempo me inscribí en la Escuela Superior de Administración Pública – ESAP,  en el 2010, luego de un concurso de méritos ingresé en carrera administrativa a la Defensoría del Pueblo, institución noble y reconocida por la comunidad por su ardua defensa de los derechos humanos, graduado de administrador público en el 2010, inicié y terminé mis estudios como abogado en Uniciencia, me especialicé en Derecho Administrativo en la Universidad del Rosario y la Universidad Autónoma de Bucaramanga, en el año 2017 mediante concurso de méritos ingresé a la Procuraduría General de la Nación.</p>
            </div>

            <div className='parrafo-4'>
                <p>Coordinador del Primer Congreso Regional de Administración Pública: Nuevas Tendencias de Gestión Pública, en alianza con ESAP CETAP BUCARAMANGA, Exmiembro de la Junta Directiva del Fondo de Empleados de la Defensoría del Pueblo, Secretario General del Sindicato de los Trabajadores de la Procuraduría General de la Nación – Subdirectiva Seccional Santander.</p>

            </div>

            <div className='parrafo-5'>
                <p>Reunida la experiencia como servidor público, y combinada con la preparación académica en administración pública, abogado especializado en derecho administrativo, convencido de mi vocación al servicio público, de la mano de Dios quiero aportar de una manera mas significativa mediante un proyecto encaminado a recuperar el verdadero sentido de la política, con ideas y proyectos que se traduzcan en la satisfacción de las expectativas de una comunidad agobiada con la negligencia, el olvido, la co xdrrupción y los intereses particulares de quienes están al frente de ellas.</p>
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
        </div>


    );
};

export default Biografia;