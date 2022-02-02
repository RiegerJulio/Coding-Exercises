import React, { createContext, useState } from 'react';

const Context = createContext();

const CarsProvider = ({ children }) => {
 const [getCars, setCars] = useState({
    redCar: false,
    blueCar: false,
    yellowCar: false,
 });

 const [getSignal, setSignal] = useState({
   color: 'red',
 });

 const moveCar = (car, side) => {
   setCars({
     ...getCars,
     [car]: side,
   });
 };

 const changeSignal = (signalColor) => {
   setSignal({
     color: signalColor,
   })
 }

 const context = { getCars, moveCar, getSignal, changeSignal};

  return (
    <Context.Provider value={context}>
      {children}
    </Context.Provider>
  );
};

export { Context, CarsProvider as Provider };
