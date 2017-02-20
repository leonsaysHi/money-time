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

    return (
      <div className="tile is-child currentPrice">
        <div className={"prices " + (priceStatus > 0 ? "show-success" : priceStatus < 0 ? "show-danger" : "show-warning")}>
          <div className="price is-success"><div>+0.50€</div></div>
          <div className="price is-warning"><div>0€</div></div>
          <div className="price is-danger"><div>-0.50€</div></div>
        </div>
      </div>
    )
  }

}

export default DisplayCurrentPrice;
