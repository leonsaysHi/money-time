import React from 'react';
import {FocusTrap, HotKeys, HotKeyMapMixin} from 'react-hotkeys';

class Command extends React.Component {


  constructor(props) {
    super(props);
    this.state = {
      key: {}
    };

    this.newCommand = props.onNewCommand.bind(this);
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
      <div>
        <HotKeys keyMap={keyMap} handlers={handlers}>
          <input />
        </HotKeys>
      </div>
    )
  }

}

export default Command;
