import React from 'react';
import DisplayCurrentPrice from './displayCurrentPrice.jsx';
import DisplayCurrentScore from './displayCurrentScore.jsx';

class Display extends React.Component {

  constructor(props) {

    super(props);

    this.periodsList = props.periodsList;
  }

  render() {

    return (
      <div className="tile is-parent">
        <div className="tile is-vertical">

          <DisplayCurrentPrice periodsList={this.props.periodsList} />
          <DisplayCurrentScore periodsList={this.props.periodsList} />

        </div>
      </div>
    )
  }

}

export default Display;
