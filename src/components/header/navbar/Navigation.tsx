import './navigation.css';
import { useState, useEffect } from 'react';
import {LinkContainer} from 'react-router-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { HashLink as Link } from 'react-router-hash-link';

interface NavigationProps {
    posterImg: string;
    text1: string;
    text2: string;
    text3: string;
    text4: string;
    text5: string;
}

const Navigation = (props: NavigationProps) => {
    const [scrolling, setScrolling] = useState(false);

    useEffect(() => {
      console.log('scrollE')
      const handleScroll = () => {
        console.log('scroll')
        if (window.scrollY > 50) {
          console.log('scroll')
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        console.log('remove')
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <Navbar expand="lg" fixed="top" className={`navbar navbar-default navbar-fixed-top ${scrolling ? 'nav-scroll' : ''}`} variant="dark">
            <Container>
                <LinkContainer to="/">
                <Navbar.Brand><img src={props.posterImg} alt="logo" title="" className="img-fluid" /></Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav" className='navbar-toggle'/>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="nav navbar-nav navbar-right">
                    <Nav.Link as={Link} to='/#about'>{props.text1}</Nav.Link>
                    <Nav.Link as={Link} to='/#Projects'>{props.text2}</Nav.Link>
                    <Nav.Link as={Link} to='/#services'>{props.text3}</Nav.Link>
                    <Nav.Link as={Link} to='/#blog-posts'>{props.text4}</Nav.Link>
                    <Nav.Link as={Link} to="/#contact">{props.text5}</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
};

export default Navigation;
