import React from "react";

class MostWatch extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}
  render() {
    let srcImage = "http://localhost:3000/" + this.props.imageUrl;
    return (
      <div className="col-md-6">
        <div className="in-check">
          <h3>{this.props.titles}</h3>
          <ul className="unit">
            <li>
              <span>Image</span>
            </li>
            <li>
              <span>Product Name</span>
            </li>
            <li>
              <span>Unit Price</span>
            </li>

            <div className="clearfix"> </div>
          </ul>

          <ul className="cart-header">
            <li className="ring-in">
              <img src={srcImage} className="img-responsive" alt="" />
            </li>
            <li>
              <span className="name">{this.props.title}</span>
            </li>
            <li>
              <span className="cost">$ {this.props.price}</span>
            </li>

            <div className="clearfix"> </div>
          </ul>
        </div>
      </div>
    );
  }
}

module.exports = MostWatch;
