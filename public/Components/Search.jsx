import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      initialItems: [],
      Items: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/products", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({
          initialItems: res.products,
          Items: res.products
        });
      });
  }

  componentDidUpdate() {}

  filterList(event) {
    let Items = this.state.initialItems;
    Items = Items.filter(item => {
      return item.title.toLowerCase().search(event.toLowerCase()) !== -1;
    });

    this.setState({ Items: Items });
  }
  render() {
    return (
      <div className="container">
        <h1>Search a product after title to see the information</h1>
        <div className="account-bottom">
          <input
            placeholder="Search for..."
            type="Text"
            // value={this.state.query}
            onChange={event => this.filterList(event.target.value)}
          />
          <div>
            {this.state.Items.map(item => {
              let src = "http://localhost:3000/" + item.imageUrl;

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
                        <span>Number of search</span>
                      </li>
                      <li>
                        <span>Number of product bought</span>
                      </li>
                      <div className="clearfix"> </div>
                    </ul>

                    <ul className="cart-header">
                      <li className="ring-in">
                        <img src={src} className="img-responsive" alt="" />
                      </li>
                      <li>
                        <span className="name">{item.title}</span>
                      </li>
                      <li>
                        <span className="cost"> {item.visit}</span>
                      </li>
                      <li>
                        <span className="cost"> {item.bought}</span>
                      </li>
                      <div className="clearfix"> </div>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Search;
