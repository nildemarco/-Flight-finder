import React from 'react';
import { Nav } from './NavBar.style';
import { MdFlight, MdLocalHotel, MdDirectionsCar } from 'react-icons/md';
import { useHistory } from 'react-router-dom';


const NavBar = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }
    return (
        <Nav>
            <h1 onClick={handleClick}>Flight Inspiration</h1>
            <ul>
                <li><MdFlight className="icons-navbar" /> Flights</li>
                <li><MdLocalHotel className="icons-navbar" /> Hotel</li>
                <li><MdDirectionsCar className="icons-navbar" /> Car</li>
            </ul>
        </Nav>
    );
}
export default NavBar;