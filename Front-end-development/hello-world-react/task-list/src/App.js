import React from 'react';

function Task(value) {
  return (
    <li key={value}>{value}</li>
  );
}

const tasks = ['Cold Shower', 'Breakfast', 'Reading', 'Study', 'Launch'];


class App extends React.Component {
  render() {
    return (
      <ul>{ tasks.map((tasks) => Task((tasks))) }</ul>
    );
  }
}
export default App;