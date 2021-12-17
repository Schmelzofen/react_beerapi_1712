import allBeers from "../img/mehrere.png"
import oneBeer from "../img/einbier.png"
import { Link } from "react-router-dom"

const Startseite = () => {
    return (
        <section className="startseite">
            <div className="allBeers">
                <img src={allBeers} alt="allbeers" />
                <Link className="startLink" to="/bieruebersicht">All Beers</Link>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>
            <div className="randomBeer">
                <img src={oneBeer} alt="rndbeer" />
                <Link className="startLink" to="/bierzufall">Random Beer</Link>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, a, eleifend vitae varius venenatis. </p>

        </section>
    );
}

export default Startseite;