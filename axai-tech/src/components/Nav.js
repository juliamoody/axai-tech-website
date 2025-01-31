import React, { Component } from 'react'
import ximage from '../images/Axaitech.png';
import {Link} from 'react-router-dom';

export default class Nav extends Component {
    render() {
        return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link to="/"><img src={ximage}></img></Link>
                {/* <a className="navbar-brand" href="#"><img src={ximage}></img></a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="p-2 nav-link" to="/" style={{ textDecoration: 'none' }}>Home </Link>
                        {/* <a className="nav-link" aria-current="page" href="#">Home</a> */}
                        </li>
              <li className="nav-item">
                {/* <a className="nav-link" href="#">Product</a> */}
                <Link className="p-2 nav-link" to="/product" style={{ textDecoration: 'none' }}>Product </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="#">About</a> */}
                <Link className="p-2 nav-link" to="/about" style={{ textDecoration: 'none' }}>About </Link>
              </li>
              <li className="nav-item">
                {/* <a className="nav-link" aria-current="page" href="#">Resources</a> */}
                <Link className="p-2 nav-link" to="/about" style={{ textDecoration: 'none' }}>Resources </Link>
              </li>

          </ul>
        <div>
            <button className="btn btn-outline-success" type="submit">Doctor Login</button>
        </div>
        <div>
            <button className="btn btn-outline-success ml-3" type="submit">Patient Login</button>
        </div>
        

      </div>
    </div>
  </nav>
        )
    }
}
