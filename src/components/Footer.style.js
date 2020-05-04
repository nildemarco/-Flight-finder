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
}
.icons-footer:hover {
    color: #ffff;
}
`;