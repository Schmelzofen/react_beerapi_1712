import React, { Component, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Link } from "react-router-dom";
import NavItem from "./NavItem"

const BierTemp = ({ foto, marke, geschmack, produzent, id }) => {
    return (
        <div className="BierContainerMain">
            <div className="BierBild">
                <img src={foto} alt={marke} />
            </div>
            <div className="BierDetails">
                <div className="textContainer">
                    <h1>{marke}</h1>
                    <p>{geschmack}</p>
                    <p>{produzent}</p>
                </div>
                <Link to={`/bieruebersicht/${id}`}><button>Details</button></Link>
            </div>
        </div>
    );
}
// Bild, Name, Slogan, Produzent, Detailseite(!) = /beers/:beerId


class BierUebersicht extends Component {
    constructor(props) {
        super(props);
        this.state = {
            beer: [],
        }
    }

    componentDidMount() {
        fetch('https://ih-beers-api2.herokuapp.com/beers')
            .then(response => response.json())
            .then(json => this.setState({ beer: json }, () => {
                console.log(this.state.beer)
            }))
    }

    render() {
        return (
            <div className="mainContainer">
                {this.state.beer.map(elt => <BierTemp
                    id={elt._id}
                    key={uuidv4()}
                    foto={elt.image_url}
                    marke={elt.name}
                    geschmack={elt.tagline}
                />)}
                <NavItem />
            </div>
        )
    }
}

export {
    BierUebersicht,
    BierTemp,
}