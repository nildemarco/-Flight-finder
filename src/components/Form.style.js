import styled from 'styled-components';

export const Forms = styled.form`
background-color: rgb(255, 255, 255, 0.7);
padding: 10px;
display: flex;
justify-content: center;
align-items: center;
margin: 0px 20px;
border-radius: 10px;
label {
   font-size:14px;
   color:#333333;
   font-weight: bolder;
   padding: 0px 5px;
}
input {
   background-color:#FFFFFF;
   border:solid 2px #CBCBCB;
   font-size:13px;
   color:#000;
   -moz-border-radius:9px;
   -webkit-border-radius:9px;
   border-radius:9px;
   padding: 5px;
}
@media (max-width: 425px) {
   display: flex; 
   flex-direction: column;
   input {
      margin: 5px;
   }
}
`;
export const Submit = styled.input`
width: 70px;
height: 32px;
background-color:#FFFFFF;
border:solid 1px #A9A9A9;
font-size:18px;
color:#000000;
padding: 10px 30px;
-moz-border-radius:15px;
-webkit-border-radius:15px;
border-radius:15px;
`;