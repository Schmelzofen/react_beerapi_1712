import React, { Component } from 'react';
import { Link } from "react-router-dom"
import NavItem from "./NavItem"


class BierDetail extends Component {
    state = {
        beers: []
    }

    componentDidMount() {
        fetch(`https://ih-beers-api2.herokuapp.com/beers/${this.props.id}`)
            .then(response => response.json())
            .then(json => this.setState({ beers: json }, () => {
                console.log(this.state.beers)
            }))
    }

    render() {
        console.log(this.state.beers)
        return (
            <div className="bierZufall">
                <div className="zufallBild">
                    <img src={this.state.beers.image_url} alt="" />
                </div>
                <div className="zufallMarke">
                    <h1>{this.state.beers.name}</h1>
                    <p>{this.state.beers.tagline}</p>
                </div>
                <div className="zufallDetail">
                    <div className="detailOben">
                        <p>First Brewed:</p>
                        <p>{this.state.beers.first_brewed}</p>
                    </div>
                    <div className="detailUnten">
                        <p>Attenuation Level:</p>
                        <p>{this.state.beers.attenuation_level}</p>
                    </div>
                    <h3>{this.state.beers.description}</h3>
                    <Link to="/bieruebersicht" className="backButton"><i class="fas fa-arrow-circle-left fa-3x"></i></Link>
                </div>
                <NavItem />
            </div>
        );
    }
}


export default BierDetail;