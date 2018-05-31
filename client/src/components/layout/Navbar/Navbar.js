import React, { Component} from "react";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light navbar-expand-md bg-success justify-content-between fixed-top">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-nav">
              <span className="navbar-toggler-icon"></span>
          </button>
          <a href="/" className="navbar-brand mx-auto d-block dual-nav w-100 w-100">The Lone Taco</a>
   
            <form class="form-inline my-2 my-lg-0 navbar-brand mx-auto d-block text-center w-100">
                  <input class="form-control mr-sm-2" id="search" type="search" placeholder="Search by taco plate or restaurant" aria-label="Search" />
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Go!</button>
            </form>

          <div className="navbar-collapse collapse dual-nav w-100">
              <ul className="nav navbar-nav ml-auto">
                  <li className="nav-item">
                      <a className="nav-link pl-0" href="#">Login</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#">Sign Up</a>
                  </li>
              </ul>
          </div>
      </nav>
      )
  }
}

export default Navbar;