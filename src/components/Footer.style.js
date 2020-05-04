import styled from 'styled-components';

export const FooterContainer = styled.footer`
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h3 {
    font-size: 25px;
    margin: 5px;
}
ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin-top: 5px;
    li {
        margin: 0px 28px;
        cursor: pointer;
    }
}
.icons-footer {
    font-size: 40px;
    margin: 5px 15px;
    cursor: pointer;
    :hover {
    color: #ffff;
    }   
}

@media (max-width: 425px) {
   display: flex; 
   flex-direction: column;
   font-size: 20px;
   h3 {
       font-size: 20px;
   }
   .icons-footer {
       font-size: 25px;
       cursor: pointer;
       :hover {
       color: #ffff;
       }
   }
   
   ul {
       display: flex; 
       justify-content: center;
       align-items: flex-start;
       li {
          font-size: 15px;
          margin: 0px 10px;
       }
   }
}
`;