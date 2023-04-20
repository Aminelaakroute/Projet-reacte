/* eslint-disable jsx-a11y/anchor-is-valid */

import NavItem from '../../components/NavItem/NavItem'
import './Footer.css'
const Footer = () => {
  return (
   
      
    <div class="container">
    <footer class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
          <NavItem>
            <a href="#" class="nav-link px-2 text-muted">Home</a>
          </NavItem>
          
          <NavItem>
             <a href="#" class="nav-link px-2 text-muted">Features</a>
          </NavItem>

          <NavItem>
            <a href="#" class="nav-link px-2 text-muted">Pricing</a>
          </NavItem>

          <NavItem>
            <a href="#" class="nav-link px-2 text-muted">FAQs</a>
          </NavItem>

          <NavItem>
            <a href="#" class="nav-link px-2 text-muted">About</a>
          </NavItem>

      </ul>
      <p class="text-center text-muted">© 2023 Company, Inc</p>
    </footer>
  </div>
   
  )
}

export default Footer