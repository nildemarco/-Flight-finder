import React from 'react';
import { MainCard } from './MainCardContainer.style';
import MCard from './MCard';
import imgflight from '../assets/air-plane-icon-illustration.jpg';
import imgcar from '../assets/car.png';
import imghotel from '../assets/icon-for-hotel-4.jpg';


const MainCardContainer = () => {
    return (
        <MainCard>
            <MCard title="Look for your dreams" img={imgflight} />
            <MCard title="Rent an awesome car" img={imgcar} />
            <MCard title="Find your dream's hotel" img={imghotel} />
        </MainCard>
    );
}
export default MainCardContainer;