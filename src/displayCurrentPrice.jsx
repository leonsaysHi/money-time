import React from 'react';

class DisplayCurrentPrice extends React.Component {

  constructor(props) {

    super(props);

    this.periodsList = props.periodsList;
  }

  render() {

    let periodLenght = this.props.periodsList.length;
    let priceStatus = this.props.periodsList.reduce( (cp, p, i) => {

      if (i === periodLenght-1) {
        return cp;
      }
      let st = p.getStatus();
      if (st > 0 && cp < 1) {
        cp += 1;
      }
      else if (st < 0 && cp > -1) {
        cp -= 1;
      }
      return cp;
    }, 0);
    let priceString = priceStatus > 0 ? '-0.50€' : priceStatus < 0 ? '+0.50€' : '0€';

    return (
      <div className={"tile is-child currentPrice " + (priceStatus > 0 ? "is-success" : priceStatus < 0 ? "is-danger" : "is-warning")}>
        <div className="content">
          {priceString}
        </div>
      </div>
    )
  }

}

export default DisplayCurrentPrice;
