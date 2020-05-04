import styled from 'styled-components';

export const Container = styled.section`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;`

export const CardContainer = styled.article`
width:75%;
background-color: rgb(250, 250, 250, 0.6);
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: all .2s ease-in-out;
margin: 10px;
padding: 5px;
border-radius: 5px;
.icons-cardbottom {
    margin-bottom: -3px;
}
:hover {
    transform: scale(1.1);
}`

export const CardDetails = styled.div`
width: 90%;
display: flex;
justify-content: space-around;
font-size: 20px;
`
export const CardBottom = styled.div`
width: 90%;
display: flex;
justify-content: space-around;
button {
    width: 150px;
    height: 30px;
    margin-bottom: -5px;
    background-color:#D3E2FF;
   border:none;
   font-size:16px;
   color:#000000;
   font-weight:normal;
   padding: 0px 25px;
   -moz-border-radius:17px;
   -webkit-border-radius:17px;
   border-radius:17px;
}`

export const ErrorContainer = styled.div`
width: 90%;
height:300px;
display:flex;
justify-content: center;
align-items:center;
font-size: 30px;
color: red;
background-color: rgb(255, 255, 255, 0.7);
border-radius: 20px;
`
