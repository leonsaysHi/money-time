import React from 'react';

class DisplayCurrentScore extends React.Component {

  constructor(props) {

    super(props);

    this.periodsList = props.periodsList;
  }

  render() {

    let lastPeriods = this.props.periodsList.slice(-4);
    let currentPeriod = lastPeriods.slice(-1)[0];

    let gameScores = this.props.periodsList.reduce( (scores, p, i) => {

      let sc = p.getScores();
      scores[0] += sc[0];
      scores[1] += sc[1];
      return scores;
    }, [0, 0]);

    return (
      <div className="tile is-child currentScore">

        {lastPeriods.map( (p, i) => (
          <div className="periodScores" key={'period'+i}>{p.scores.join(' - ')} ({p.getOffset()})</div>
        ))}
        <div className="gameScores"><strong>{gameScores.join(' - ')}</strong></div>
      </div>
    )
  }

}

export default DisplayCurrentScore;
