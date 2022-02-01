import React from 'react';
import Context from './Context';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

class TrafficSignal extends React.Component {

  renderSignal = (signalColor) => {
    if (signalColor === 'red') {
      return redSignal;
    }
    if (signalColor === 'green') {
      return greenSignal;
    }
    if (signalColor === 'yellow') {
      return yellowSignal;
    }
    return null;
  };

  render() {

    const { color } = this.context.signal
    const { changeSignal } = this.context;

    return (
      <div>
        <div className="button-container">
          <button type="button" onClick={() => changeSignal('red')}>Red</button>
          <button type="button" onClick={() => changeSignal('yellow')}>Yellow</button>
          <button type="button" onClick={() => changeSignal('green')}>Green</button>
        </div>
        <img className="signal" src={this.renderSignal(color)} alt="" />
      </div>
    );
  }
}

TrafficSignal.contextType = Context;

export default TrafficSignal;
