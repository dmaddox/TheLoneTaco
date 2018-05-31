import React, { Component} from "react";
import Jumbotron from "../../components/layout/Jumbotron";
import Navbar from "../../components/layout/Navbar";
import InitialSearch from "../../components/forms/InitialSearch";

class Home extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Jumbotron>
        <div>
        Welcome home.
        </div>
        <InitialSearch>
        </InitialSearch>
      </Jumbotron>
      </div>
    )
  }
}

export default Home;