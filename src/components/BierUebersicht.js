import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const BierTemp = ({ foto, marke, geschmack, produzent }) => {
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
                <button>Details</button>
            </div>
        </div>
    );
}
// Bild, Name, Slogan, Produzent, Detailseite(!) = /beers/:beerId

const BierEinzel = () => {
    let { id } = useParams()


    let bData = this.state.beer.filter(elt => {
        return elt.id.toString() === id.toString()
    })
    console.log(bData)
    return (
        <div><h1>Hello</h1></div>
    );
}

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
                    key={uuidv4()}
                    foto={elt.image_url}
                    marke={elt.name}
                    geschmack={elt.tagline}
                />)}
            </div>
        )
    }
}

export {
    BierUebersicht,
    BierEinzel,
    BierTemp,
}