import styled from 'styled-components';

export const MainCard = styled.section`
width: 100%;
display: flex;
justify-content: space-around;
align-items:center;
margin: 30px 0px;
@media (max-width: 768px) {
    height: 450px;
    display: flex;
    flex-direction: column;
}
@media (max-width: 425px) {
   height: 500px;
}
`;