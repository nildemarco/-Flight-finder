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
.card-details {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
img {
    width: 80%;
    height: auto;
    border-radius: 50%;
    object-fit: cover;
}
:hover {
    transform: scale(1.1);
}
@media (max-width: 768px) {
    width: 85%;
    display: flex;
    flex-direction: column;
    padding: 10px;
    h3 {
        margin: 0px;
    }
    .card-details {
        display: flex; 
        flex-direction: row;
        margin: 0px;
        font-size: 15px
    }
    img {
        width: 15%;
        height: auto;
        margin-right: 10px;
    }
}
@media (max-width: 425px) {
   height: 130px;
   h3 {
       font-size: 20px;
   }
   img {
       width: 20%;
       height: auto;
   }
   p {
       font-size: 10px;
   }
}
`;