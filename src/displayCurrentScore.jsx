import React from 'react';

class DisplayCurrentScore extends React.Component {

  constructor(props) {

    super(props);

    this.periodsList = props.periodsList;
  }

  render() {

    let
			prevPeriods = this.props.periodsList.slice(0, -1),
	    currentPeriod = this.props.periodsList.slice(-1)[0],
			gameScores = this.props.periodsList.reduce( (scores, p, i) => {
	      let sc = p.getScores();
	      scores[0] += sc[0];
	      scores[1] += sc[1];
	      return scores;
	    }, [0, 0]),
			getPeriodClasses = function(offset) {
				let ret = ['scores'], absOffset = Math.abs(offset);
				ret.push( (offset > 0 ? "is-success" : offset < 0 ? "is-danger" : "is-warning") )
				if (absOffset >= 15) ret.push('xl')
				else if (absOffset >= 10) ret.push('l')
				else if (absOffset >= 5) ret.push('m')
				return ret.join(' ')
			}
		;

    return (
      <div className="tile is-child currentScore">
				<div className="gameSummary">
					<div className="gameSummary__periods">
					{prevPeriods.map( (p, i) => (
						<div className={"scores " + (i===0 ? "current " : "") + (p.getOffset() > 0 ? "is-success" : p.getOffset() < 0 ? "is-danger" : "is-warning")} key={'period'+i}>
							{p.getOffset()}
						</div>
					))}
					</div>
					<div className="gameSummary__Scores">
						<strong>{gameScores.join(' - ')}</strong>
					</div>
				</div>
				<div className="currentPeriod">
					<div className={getPeriodClasses(currentPeriod.getOffset())}>
						<div>{currentPeriod.getOffset()}</div>
					</div>
				</div>

      </div>
    )
  }

}

export default DisplayCurrentScore;
