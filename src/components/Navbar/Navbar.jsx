import { Link } from 'react-router-dom'
import { BiMenuAltRight } from 'react-icons/bi'
import { Navbar as NavbarComp, Container, Nav } from 'react-bootstrap'
import { useState } from 'react'

const Navbar = () => {
    const NavItems = ['Product', 'Features', 'Reviews', 'Pricing', 'FAQ']
    const [expanded, setExpanded] = useState(false);
    return (
        <NavbarComp collapseOnSelect expand='lg' expanded={expanded} className="py-3">
            <Container>
                <div className="container d-flex justify-content-between align-items-center">
                    <h5 onClick={() => setExpanded(false)} className='fw-bold'><Link to='/'>Connect.</Link></h5>
                    <NavbarComp.Toggle onClick={() => setExpanded(!expanded)} className='border-0' aria-controls="responsive-navbar-nav" ><BiMenuAltRight className='fs-1' /></NavbarComp.Toggle>
                    <ul className="navbar-nav d-none d-md-flex flex-row align-items-center" style={{ gap: '25px' }}>
                        {NavItems && NavItems.map(item => <li key={item}><Link to={item.toLowerCase()}>{item}</Link></li>)}
                        <li><button className="btn btn-outline-secondary fw-bold border-3 px-5 py-1">DOWNLOAD</button></li>
                    </ul>
                </div>
                <NavbarComp.Collapse id='responsive-navbar-nav' style={{ flexGrow: '0' }}>
                    <Nav>
                        <ul className="navbar-nav d-flex d-md-none py-2 flex-column align-items-center" style={{ gap: '25px' }}>
                            {NavItems && NavItems.map(item => <li onClick={() => setExpanded(false)} key={item}><Link className='fw-bold' to={item.toLowerCase()}>{item}</Link></li>)}
                            <li onClick={() => setExpanded(false)}><button className="btn btn-outline-secondary fw-bold border-3 px-5 py-1">DOWNLOAD</button></li>
                        </ul>
                    </Nav>
                </NavbarComp.Collapse>
            </Container>
        </NavbarComp>
    )
}

export default Navbar