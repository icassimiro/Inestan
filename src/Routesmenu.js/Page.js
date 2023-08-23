import { AiFillInstagram, AiFillYoutube } from "react-icons/ai";

import { FaSpotify, FaDeezer, FaSoundcloud } from "react-icons/fa";
import perfiljoao from "../images/perfiljoao.png";
import logojoao from "../images/logojoao.jpg";

import sympla from "../images/sympla.png";
export default function Page() {
  return (
    <div className="pagediv">
      <div className="divheaders">
        <img className="logopage" src={logojoao}></img>
        <a
          target="_blank"
          href="https://www.sympla.com.br/?gclid=Cj0KCQjw3JanBhCPARIsAJpXTx73JJa1VnCGAvZoQP5toSkoM2R4oJnjYwwb1PWvsAHMqhLf5AH-Qo0aAsvvEALw_wcB"
        >
          <div className="divsympla">
            <button className="btnsympla">
              <img className="sympla" src={sympla}></img>
            </button>
          </div>
        </a>
      </div>
      <div className="divjoao">
        <img className="perfil" src={perfiljoao}></img>
        <div className="divlinks">
          <div className="links">
            <h2 className="showtexttitle">REDES SOCIAIS E PLATAFORMAS</h2>
            <a
              target="_blank"
              href="https://www.instagram.com/djjoaodainestan/"
            >
              <button className="showtext">
                INSTAGRAM
                <AiFillInstagram className="socials" />
              </button>
            </a>
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCGPO733Wowit2j81ZKBACYw"
            >
              <button className="showtext">
                YOUTUBE
                <AiFillYoutube className="socials" />
              </button>
            </a>
            <a
              target="_blank"
              href="https://open.spotify.com/intl-pt/artist/1K3wppIvsUK99HODkiNgeu"
            >
              <button className="showtext">
                SPOTIFY
                <FaSpotify className="socials" />
              </button>
            </a>
            <a target="_blank" href="https://www.deezer.com/br/artist/77036932">
              <button className="showtext">
                DEEZER
                <FaDeezer className="socials" />
              </button>
            </a>
            <a target="_blank" href="https://soundcloud.com/djjoaodainestan">
              <button className="showtext">
                SOUNDCLOUD <FaSoundcloud className="socials" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
