/* eslint-disable jsx-a11y/anchor-is-valid */



import React from 'react'
import './Header.css'
import logo from '../../assets/images/logo-removebg-preview.png'
import NavItem , {NavItemDropDown} from '../../components/NavItem/NavItem'

const Header = () => {
  return (
<nav className="navbar navbar-expand-lg navbar-light cyborg-navbar">{/* bg-light */}
  <div className="container-fluid">
    <a className="navbar-brand" href="#">
    <img src={logo} alt=""/> 
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <NavItem>
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </NavItem>

        <NavItem>
          <a className="nav-link" href="#">Profile</a>
        </NavItem>

        <NavItem>
          <a className="nav-link" href="#">Log out</a>
        </NavItem>
        

        <NavItemDropDown>
        
          <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Details
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Afficher les Utilisateurs</a></li>
            <li><a className="dropdown-item" href="#">Importer fichier Excel </a></li>
            <li><a className="dropdown-item" href="#">Exporter fichier Excel </a></li>
          </ul>
        
        </NavItemDropDown>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>




  )
}

export default Header