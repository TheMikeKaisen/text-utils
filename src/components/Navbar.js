import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">{props.aboutText}</a>
            </li>
            
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </div>
    </nav>
    
  )
}

// proptypes ensure that the value that are send as props sticks to the data types as you mention otherwise, if some error happens, it would be difficult to identify the error.
Navbar.propTypes = {title: PropTypes.string,
                    home: PropTypes.string.isRequired, // if no value is set to home props, then it will lead to an error. 
                    aboutText: PropTypes.string}

// if no props are passed to the elements, "defaultProps" will set it automatically
Navbar.defaultProps = {
    title: "set title here", 
    home: "this is home",
    aboutText: "set text here"
}