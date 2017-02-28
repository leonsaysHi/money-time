import React from 'react';
import {FocusTrap, HotKeys, HotKeyMapMixin} from 'react-hotkeys';

class Command extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      'key': {},
      'started': false
    };

    this.newCommand = props.onNewCommand.bind(this);
  }

  startApp = () => {
    console.log('start');
      this.setState({'started': true});
  }

  pauseApp = () => {
    console.log('pause');
      this.setState({'started': false});
  }

  render() {
    let cb = (comm) => () => this.newCommand(comm);
    const keyMap = {
      'down': 'down',
      'up': 'up',
      'period': 'enter',
      'rollback': 'backspace'
    };
    const handlers = {
      'down': cb('-'),
      'up': cb('+'),
      'period': cb('='),
      'rollback': cb('<')
    };

    return (
      <div id="command" className={(this.state.started ? 'started' : '')}>
        <div className="content-wrapper">
          <div className="instructs">
            <div>
              <div>+</div><div>Ajouter un point à l'équipe locale</div>
            </div>
            <div>
              <div>-</div><div>Ajouter un point aux adversaires</div>
            </div>
            <div>
              <div>↵</div><div>Fin du quart-temps</div>
            </div>
            <div>
              <div>⌫</div><div>Annuler la dernière instruction</div>
            </div>
          </div>
          <HotKeys keyMap={keyMap} handlers={handlers} onFocus={this.startApp} onBlur={this.pauseApp}>
            <input />
          </HotKeys>
        </div>
      </div>
    )
  }

}

export default Command;
