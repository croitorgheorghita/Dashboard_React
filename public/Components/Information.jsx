import React from "react";

class Information extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1 className="text_color_box">
          {this.props.name} {this.props.propBox}
        </h1>
        <h1 className="text_color_box" style={{ fontSize: "80px" }}></h1>
      </div>
    );
  }
}

module.exports = Information;
