import styled from 'styled-components';

export const Nav = styled.nav`
width: 100%;
height: 100px;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 26px;
h1 {
    margin-left: 20px;
    cursor: pointer;
}
ul {
    display: flex;
    align-items: center;
    justify-content: space-around;
    list-style: none;
    margin-right: 50px;
    li {
        margin: 0px 20px;
        cursor: pointer;
    }
}
li:hover {
    color: rgb(255, 255, 255, 0.9);
}
.icons-navbar {
    margin-bottom: -3px;
}
`