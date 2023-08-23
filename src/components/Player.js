import React from 'react';
import { Card } from 'react-bootstrap';

const cardStyle = {
    width: '18rem',
    marginBottom: '20px'
};

const imageStyle = {
    maxHeight: '450px',
    objectFit: 'cover'
};

function Player(props) {
    const {
        name = "Nom inconnu",
        team = "Équipe inconnue",
        nationality = "Nationalité inconnue",
        jerseyNumber = "Numéro inconnu",
        age = "Âge inconnu",
        image = ""
    } = props.player;
    
    return (
    <Card style={cardStyle}>
        <Card.Img variant="top" src={image} style={imageStyle}/>
        <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Équipe: {team}</Card.Text>
        <Card.Text>Nationalité: {nationality}</Card.Text>
        <Card.Text>Numéro de maillot: {jerseyNumber}</Card.Text>
        <Card.Text>Âge: {age}</Card.Text>
        </Card.Body>
    </Card>
    );
}

export default Player;
