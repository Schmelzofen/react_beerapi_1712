import React from 'react';
import { Link } from "react-router-dom"
import NavItem from "./NavItem"

class BierZufall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: [],
        }
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers/random')
            .then(response => response.json())
            .then(json => this.setState({ beer: json }, () => {
                console.log(this.state.beer)
            }))
    }

    render() {
        return (
            <div className="bierZufall">
                <div className="zufallBild">
                    <img src={this.state.beer.image_url} alt="" />
                </div>
                <div className="zufallMarke">
                    <h1>{this.state.beer.name}</h1>
                    <p>{this.state.beer.tagline}</p>
                </div>
                <div className="zufallDetail">
                    <div className="detailOben">
                        <p>First Brewed:</p>
                        <p>{this.state.beer.first_brewed}</p>
                    </div>
                    <div className="detailUnten">
                        <p>Attenuation Level:</p>
                        <p>{this.state.beer.attenuation_level}</p>
                    </div>
                    <h3>{this.state.beer.description}</h3>
                    <Link to="/" className="backButton"><i class="fas fa-arrow-circle-left fa-3x"></i></Link>
                </div>
                <NavItem />
            </div>
        )
    }
}

export default BierZufall;