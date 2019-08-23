import React from "react";
// eslint-disable-next-line no-unused-vars
import { LineChart } from "react-chartkick";
import "chart.js";

class Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      firstDay: null,
      secondDay: null,
      thirdDay: null,
      fourthDay: null,
      firstDayVisit: null,
      secondDayVisit: null,
      thirdDayVisit: null,
      fourthDayVisit: null
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/api/chartData", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.last,
          firstDay:
            res.last[3].year + " " + res.last[3].month + " " + res.last[3].day,
          secondDay:
            res.last[2].year + " " + res.last[2].month + " " + res.last[2].day,
          thirdDay:
            res.last[1].year + " " + res.last[1].month + " " + res.last[1].day,
          fourthDay:
            res.last[0].year + " " + res.last[0].month + " " + res.last[0].day,
          firstDayVisit: res.last[3].visits,
          secondDayVisit: res.last[2].visits,
          thirdDayVisit: res.last[1].visits,
          fourthDayVisit: res.last[0].visits
        });
      });
  }
  render() {
    return (
      <div className="container">
        <h1 style={{ marginLeft: "25px" }}>Daily traffic</h1>
        <LineChart
          data={[
            [this.state.firstDay, this.state.firstDayVisit],
            [this.state.secondDay, this.state.secondDayVisit],
            [this.state.thirdDay, this.state.thirdDayVisit],
            [this.state.fourthDay, this.state.fourthDayVisit]
          ]}
        />
      </div>
    );
  }
}

module.exports = Chart;
