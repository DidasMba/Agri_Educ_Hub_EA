import { Link } from "react-router-dom";

const Navigation = () => {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/cours">Cours</Link>
          </li>
          {/* Ajoutez d'autres liens au besoin */}
        </ul>
      </nav>
    );
  };
  
  export default Navigation;