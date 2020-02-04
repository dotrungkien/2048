import React from 'react';
// import '../styles/LeaderBoard.css';
import RowRank from './Row';
import { Row, Col } from 'reactstrap';

const Leaderboard = ({ highScores }) => (
  <div className="row leaderboard pl-5 pt-5">
    <div className="col border rounded">
      <div className="row leadheader justify-content-center border-bottom rounded-top">
        <h3>Leaderboard</h3>
      </div>
      <Row className="colheader">
        <Col className="col-1">
          <h4>#</h4>
        </Col>
        <Col className="col-8">
          <h4>Name</h4>
        </Col>
        <Col className="col-2">
          <h4>Score</h4>
        </Col>
      </Row>
      {highScores &&
        highScores.map((item, index) => (
          <RowRank
            rank={index + 1}
            name={item.name + '.id.blockstack'}
            score={item.score}
            key={index}
          />
        ))}
    </div>
  </div>
);

export default Leaderboard;
