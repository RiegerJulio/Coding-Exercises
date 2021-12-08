import React from "react";

class Pokemon extends React.Component {
  constructor () {
    super()

    this.handleClick = this.handleClick.bind(this);
    
    this.state = {
      position: 0,
    }
  }


  handleClick () {
    const {data} = this.props;
    this.setState((prevPos) => ({
      position: prevPos.position === data.length -1 ? 0 : prevPos.position + 1,
    }))
  }

  render() {
    const {position} = this.state;
    const {data} = this.props;
    return (
      <div>
        <button onClick={this.handleClick}>Próximo</button>
      <div className="pkm-box">
      <div>
      <p>{data[position].name}</p>
      <p>{data[position].type}</p>
      <p>{`Average weight: ${data[position].averageWeight.value} ${data[position].averageWeight.measurementUnit}`}</p>
      </div>
      <div>
      <img src={data[position].image} alt={`${data[position].name} img`} />
      </div>
      </div>
      </div>
    )
  }
}

export default Pokemon;