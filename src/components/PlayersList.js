import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Player from './Player';
import players from './players';

function PlayersList() {
    return (
    <Container>
        <Row>
            {players.map(player => (
                <Col key={player.id}>
                    <Player player={player} />
                </Col>
            ))}
        </Row>
    </Container>
    );
}

export default PlayersList;
