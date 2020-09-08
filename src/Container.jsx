import React from "react";
import Cards from "./Cards";

class Container extends React.Component {
  gadgets = [
    {
      type: "Laptop",
      price: 1200000,
      imgs:
        "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=926&q=80"
    },
    {
      type: "Ps4",
      price: 70000,
      imgs:
        "https://images.unsplash.com/photo-1531229632397-3331b9680a54?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=940&q=80"
    },
    {
      type: "Headphones",
      price: 100000,
      imgs:
        "https://images.unsplash.com/photo-1566286378558-5d52a6710b6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
    },
    {
      type: "Wireless Pads",
      price: 20000,
      imgs:
        "https://images.unsplash.com/photo-1576005634133-f755bf15d9c5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=966&q=80"
    },
    {
      type: "earbuds",
      price: 50000,
      imgs:
        "https://images.unsplash.com/photo-1593121730005-0b297cfc7681?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1125&q=80"
    }
  ];
  render() {
    return (
      <div className="container">
        <h1>The Dev Gadgets Store</h1>
        <div className="wrapper">
          {this.gadgets.map((gadget, i) => {
            return <Cards info={gadget} key={i} />;
          })}
        </div>
      </div>
    );
  }
}

export default Container;
