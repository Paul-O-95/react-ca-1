import React from "react";

class Cards extends React.Component {
  // super(props)
  render() {
    const { type, imgs, price } = this.props.info;
    return (
      <div className="cards">
        <img src={imgs} alt="" />
        <h3>Name:{type} </h3>
        <p>Price: {price}</p>
      </div>
    );
  }
}

export default Cards;
