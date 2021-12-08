import React from "react";

class Pokemon extends React.Component {
  render() {
    const {data} = this.props;
    return (
      <div className="pkm-box">
      <div>
      <p>{data.name}</p>
      <p>{data.type}</p>
      <p>{`Average weight: ${data.averageWeight.value} ${data.averageWeight.measurementUnit}`}</p>
      </div>
      <div>
      <img src={data.image} alt={`${data.name} img`} />
      </div>
      </div>
    )
  }
}

export default Pokemon;