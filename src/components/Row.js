import React from 'react';
import { Row, Col } from 'reactstrap';

export default ({ rank, name, score }) => (
  <Row className="colheader border-top">
    <Col className="col-1">
      <h6>{rank}</h6>
    </Col>
    <Col className="col-8">
      <h6>{name}</h6>
    </Col>
    <Col className="col-2">
      <h6>{score}</h6>
    </Col>
  </Row>
);
