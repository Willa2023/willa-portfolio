import { Navbar, Container, Nav} from 'react-bootstrap';
import { useState, useEffect } from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', onScroll);

        return () =>{
            window.removeEventListener('scroll', onScroll);
        }
    },[]);

    const onUpdateActiveLink = (link) => {
        setActiveLink(link);
    }

    return (
      <Router>
        <Navbar expand="lg" className={scrolled? "scrolled":""}>
          <Container>
            <Navbar.Brand href="#home">
              <h2>WILLA</h2>
          </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
              <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills'? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects'? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
              </Nav>
              <span className="navbar-text">
                  <div className = "social-icon">
                      <a href="https://www.linkedin.com/in/mingyue-wang-41774a292/"><img src={navIcon1} alt="linkedin"/></a>
                      <a href="https://www.facebook.com/profile.php?id=100087393097410"><img src={navIcon2} alt="facebook"/></a>
                      <a href="https://www.instagram.com/willawang2024"><img src={navIcon3} alt="instagram"/></a>
                  </div>
                  <HashLink to="#contacts">
                    <button className="vvd" onClick={()=>console.log('connect')}>
                        <span>Let's Connect</span>
                    </button>
                  </HashLink>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Router>
    )
}

export default NavBar;