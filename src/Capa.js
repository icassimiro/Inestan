import { Link } from "react-router-dom";
import logojoao from "./images/logojoao.jpg";

export default function capa() {
  return (
    <div className="divcapa">
      <div className="entrada">
        <img className="joao" src={logojoao}></img>
        <Link to="/page">
          <button className="entrar">ENTRAR</button>
        </Link>
      </div>
    </div>
  );
}
