import React from 'react'
import PropTypes from 'prop-types'


export default function Navbar(props) {
  return (
    <>
    <nav className="navbar navbar-expand-lg text-bg-light p-3">
  <div className="container-fluid">
    <h3 className="navbar-brand" href="#">{props.title}</h3>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          
        </li>
      </ul>
      
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes = {title: PropTypes.string.isRequired}

Navbar.defaultProps = {
    title:'Word Formatter'
}


