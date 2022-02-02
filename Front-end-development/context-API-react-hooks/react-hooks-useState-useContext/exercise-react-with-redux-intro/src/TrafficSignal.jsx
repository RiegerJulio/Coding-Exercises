import React, { useContext } from 'react';
import { Context } from './Context';
import redSignal from './images/redSignal.jpeg';
import greenSignal from './images/greenSignal.jpeg';
import yellowSignal from './images/yellowSignal.jpeg';

const renderSignal = (signalColor) => {
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

const TrafficSignal = () => {

  const { getSignal, changeSignal } = useContext(Context);
  const { color } = getSignal

    return (
      <div>
        <div className="button-container">
          <button type="button" onClick={() => changeSignal('red')}>Red</button>
          <button type="button" onClick={() => changeSignal('yellow')}>Yellow</button>
          <button type="button" onClick={() => changeSignal('green')}>Green</button>
        </div>
        <img className="signal" src={renderSignal(color)} alt="" />
      </div>
    );
}

TrafficSignal.contextType = Context;

export default TrafficSignal;
