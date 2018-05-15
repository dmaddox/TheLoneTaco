import React, { Component} from "react";
import Jumbotron from "../../components/layout/Jumbotron";
import InitialSearch from "../../components/forms/InitialSearch";

class Home extends Component {
  render() {
    return (
      <Jumbotron>
        <div>
        Welcome home.
        </div>
        <InitialSearch>
        </InitialSearch>
      </Jumbotron>
      
    )
  }
}

export default Home;