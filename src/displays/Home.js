import React from "react";
import Family from "../images/Family.jpg";
import { TwitterTweetEmbed, TwitterTimelineEmbed } from "react-twitter-embed";
import {
  faFacebook,
  faInstagram,
  faYoutube,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UncontrolledLottie2 from "../Components/UncontrolledLottie2";
import InstagramEmbed from "react-instagram-embed";

const Home = () => {
  return (
    <div className="body">
      <div class="row">
        <div class="column side">
          <h2>Experiencia</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>

        <div class="column middle">
          <div className="titulo-home">
            <h1>GUSTAVO GUIO</h1>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet pretium urna. Vivamus venenatis velit nec neque ultricies,
            eget elementum magna tristique. Quisque vehicula, risus eget aliquam
            placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
            Praesent scelerisque tortor sed accumsan convallis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            sit amet pretium urna. Vivamus venenatis velit nec neque ultricies,
            eget elementum magna tristique. Quisque vehicula, risus eget aliquam
            placerat, purus leo tincidunt eros, eget luctus quam orci in velit.
            Praesent scelerisque tortor sed accumsan convallis.
          </p>
          <div className="imagen-home">
            <img src={Family} alt="Family"></img>
          </div>
        </div>

        <div class="column side">
          <h2>Honestidad</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit..</p>
        </div>
      </div>

      <div className="twitter">
        <p> Social Feed</p>
        <UncontrolledLottie2 />
        <TwitterTimelineEmbed
          sourceType="profile"
          // The preferred screen name goes next:
          screenName="guio_barrera"
          // Style options goes here:
          options={{ height: 500, width: 500 }}
        />
      </div>

      {/** <div className='instagram'>
        <p> Social Feed Instagram</p>
                <InstagramEmbed
                    url='https://www.instagram.com/ciudaddereino/?hl=es-la'
                    clientAccessToken='614350022579778|32ed8f0976adcc7db918347259d7d3a4'
                    maxWidth={500}
                    hideCaption={false}
                    containerTagName='div'
                    protocol=''
                    injectScript
                    onLoading={() => { }}
                    onSuccess={() => { }}
                    onAfterRender={() => { }}
                    onFailure={() => { }}
                />
            </div>*/}
      <footer>
        <p>Gustavo Andres Guio Barrera</p>
        <p class="copyrigth">&copy;2021 Todos los derechos reservados</p>
        <div className="top-redes">
          <a href="https://www.youtube.com/channel/UC7gilKuSRhW1XyGF-D6LGVg">
            <FontAwesomeIcon
              icon={faYoutube}
              style={{ fontSize: "2.0rem", color: "white" }}
            />
          </a>

          <a href="https://www.facebook.com/jduc19/">
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: "2.0rem", color: "white" }}
            />
          </a>

          <a href="https://www.instagram.com/jduc19/?hl=es-la">
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: "2.0rem", color: "white" }}
            />
          </a>

          <a href="https://www.instagram.com/jduc19/?hl=es-la">
            <FontAwesomeIcon
              icon={faWhatsapp}
              style={{ fontSize: "2.0rem", color: "white" }}
            />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Home;
