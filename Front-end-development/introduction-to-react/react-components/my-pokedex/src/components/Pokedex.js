import React from "react";
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render() {
    const {data} = this.props;
    return(
      data.map((data) => {
        return (
          <Pokemon key={data.id} data={data}/>
        )
      })
    )
  }
}

export default Pokedex;