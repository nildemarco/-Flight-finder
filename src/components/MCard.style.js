import styled from 'styled-components';

export const Card = styled.article`
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: rgb(255, 255, 255, 0.7);
box-shadow: 5px 5px 15px 0px rgba(204,204,204,1);
padding: 10px;
border-radius: 10px;
transition: all .2s ease-in-out;
cursor: pointer;
img {
    width: 80%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
}
:hover {
    transform: scale(1.1);
}
`