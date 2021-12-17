import { Link } from "react-router-dom"
import logo from "../img/Logo.svg"

const NavItem = () => {
    return (
        <section className="bottom">
            <Link to="/"><img src={logo} alt="logo" /></Link>
        </section>
    );
}

export default NavItem;