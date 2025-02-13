import { useState } from 'react';
import './Header.css';
import { Button, Container, Row } from 'reactstrap';
import logo from '../../assets/images/logo.png';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for mobile menu

const nav_links = [
  { path: '/home', display: 'Home' },
  { path: '/about', display: 'About' },
  { path: '/service', display: 'Service' },
  { path: '/contact', display: 'Contact' },
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper d-flex align-items-center justify-content-between">
            {/* Logo */}
            <div className="logo">
              <img src={logo} alt="logo" />
            </div>

            {/* Mobile Menu Toggle */}
            <div className="mobile_menu_icon d-lg-none" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Navigation Menu */}
            <div className={`navigation ${menuOpen ? "open" : ""}`}>
              <ul className='menu d-flex align-items-center gap-4'>
                {nav_links.map((item, index) => (
                  <li className='nav_item' key={index}>
                    <NavLink to={item.path} className={({ isActive }) => (isActive ? "active" : "")}>
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Section */}
            <div className="nav_right d-none d-lg-flex align-items-center gap-4">
              <div className='nav_btns d-flex align-items-center gap-4'>
                <Button className='btn primary_btn'>REQUEST DEMO</Button>
                <Button className='btn primary_btn'>SIGN IN</Button>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
