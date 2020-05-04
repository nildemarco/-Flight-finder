import React from 'react';
import { Card } from './MCard.style';


const MCard = ({ title, img }) => {
    return (
        <Card>
            <h3>{title}</h3>
            <img src={img} />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Eligendi non quis exercitationem culpa nesciunt nihil aut
            nostrum explicabo reprehenderit optio amet ab temporibus
            asperiores quasi cupiditate. Voluptatum ducimus voluptates
            voluptas?
            </p>
        </Card>
    );
}

export default MCard;