import React from "react";

class DataContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="col-md-4">
        <div className="boxul">
          <h3 className="text_color_box">{this.props.name}</h3>
          <h1 className="text_color_box" style={{ fontSize: "80px" }}>
            {this.props.propBox}
          </h1>
        </div>
      </div>
    );
  }
}

module.exports = DataContainer;
