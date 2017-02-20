import React from 'react';
import Command from './command.jsx';
import Display from './display.jsx';
import Period from './period.js';

import '../styles/index.scss';

class App extends React.Component {

  constructor(props) {
    super(props);

    let p = new Period();
    this.state = {
      'commands': [],
      'periods': [p]
    };
  }

  pushCommand(command) {
    const cs = this.state.commands.slice();
    if ( command === '<') {
      cs.pop();
    }
    else {
      cs.push(command);
    }
    const ps = cs.reduce((accu, comm) => {
      if (accu.length === 0 || comm === '=') {
        accu.push(new Period());
      } else {
        console.log(accu);
        let p = accu[accu.length-1];
        switch (comm) {
          case '+':
            p.weScore();
            break;
          case '-':
            p.theyScore();
            break;
        };
      }
      return accu;
    }, []);
    this.setState({
      'commands': cs,
      'periods': ps
    });
  }

  render() {
    return (
      <section className="hero is-fullheight">
        <Display periodsList={this.state.periods} />
        <Command onNewCommand={this.pushCommand.bind(this)} />
      </section>
    );
  }
}

export default App;
