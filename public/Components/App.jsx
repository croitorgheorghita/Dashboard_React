/* eslint-disable no-unused-vars */
import React from "react";
import Header from "./Header";
import DataContainer from "./DataContainer";
import Chart from "./LineChart";
import Information from "./Information";
import MostWatch from "./MostWatch";
import Search from "./Search";
import openSocket from "socket.io-client";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      totalProducts: "Loading...",
      watchesSeen: "Loading...",
      watchesBought: "Loading...",
      users: "Loading...",
      trafficVisit: "Loading...",
      mostVisited: [],
      mostBougth: []
    };
  }

  componentDidMount() {
    const socket = openSocket("http://localhost:3000");
    socket.on("products", data => {
      if (data.action === "create") {
        this.state.totalProducts = this.state.totalProducts + 1;
        this.setState({ totalProducts: this.state.totalProducts });
      }
      if (data.action === "delete") {
        this.state.totalProducts = this.state.totalProducts - 1;
        this.setState({ totalProducts: this.state.totalProducts });
      }
      if (data.action === "bougth") {
        this.state.watchesBought = this.state.watchesBought + 1;
        this.setState({ watchesBought: this.state.watchesBought });
      }
      if (data.action === "seen") {
        this.state.watchesSeen = this.state.watchesSeen + 1;
        this.setState({ watchesSeen: this.state.watchesSeen });
      }
      if (data.action === "visit") {
        this.state.trafficVisit = this.state.trafficVisit + 1;
        this.setState({ trafficVisit: this.state.trafficVisit });
      }
      if (data.action === "users") {
        this.state.users = this.state.users + 1;
        this.setState({ users: this.state.users });
      }
    });
    fetch("http://localhost:3000/api/getDataForBox", { method: "GET" })
      .then(res => res.json())
      .then(res => {
        this.setState({
          totalProducts: res.productsNumber,
          watchesSeen: res.productsVisited,
          watchesBought: res.productsBougth,
          users: res.users,
          trafficVisit: res.trafficVisit,
          mostVisited: res.mostVisit,
          mostBougth: res.mostBougth
        });
      });
  }

  componentDidUpdate() {}
  render() {
    return (
      <div className="boxul1">
        <div>
          <Header />
          <div className="logo">
            <a href="/">
              <h1>analytic dashboard</h1>
            </a>
          </div>
          <div className="container">
            <DataContainer
              name="Total products:"
              propBox={this.state.totalProducts}
            />
            <DataContainer
              name="Watches seen:"
              propBox={this.state.watchesSeen}
            />
            <DataContainer
              name="Watches bought:"
              propBox={this.state.watchesBought}
            />
          </div>

          <Chart />
          <div className="container">
            <Header />

            <Information
              name="Total visits on webpage:"
              propBox={this.state.trafficVisit}
            />
            <Information name="Total users:" propBox={this.state.users} />
            <Header />
          </div>
          <div className="container">
            <MostWatch
              {...this.state.mostVisited}
              names1="Nr of visits"
              names2="Nr of bougth"
              titles="The most watched watch "
            />
            <MostWatch
              {...this.state.mostBougth}
              names1="Nr of visits"
              names2="Nr of bougth"
              titles="The most bougth watch "
            />
          </div>

          <Search />
        </div>
      </div>
    );
  }
}

export default App;
