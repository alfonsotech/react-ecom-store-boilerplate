import React, { Component } from 'react';
import { Link } from 'react-router-dom'

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm bg-primary  navbar-dark px-sm-5">
        <Link to="/">
          <button><i className="fas fa-home" /></button>
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/">
              <button>Products</button>
            </Link>
          </li>
          <li className="nav-item ml-5">
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <button><i className="fas fa-cart-plus" />  My Cart</button>
        </Link>

      </nav>
    )
  }
}
