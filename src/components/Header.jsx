import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #80DED9;
    color: #333;
    height:70px;`;

const Wrapper = styled.div`
        padding: 20px;
        display:flex;
        align-items: center;
        justify-content: space-between;
    `;

const Left = styled.div`


    `;
const Center = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

`;

const Logo = styled.a`
font-size: 30px;

`;
const Right = styled.div`
display: flex;
align-items: flex-end;


    `;

const AuthLink = styled.a`
flex: 1;
margin: 0 10px;
font-size: 14px;
font-weight: 400;
text-decoration: none;
color: black;`;

const Header = () => {
    return (
        <Container>

            <Wrapper>

                <Left>Right</Left>
                <Center><Logo>IBM Badge Application</Logo></Center>
                <Right>
                    <AuthLink href="#">
                        <Link to="/login">Login</Link>
                        </AuthLink>
                    <AuthLink href="#">
                        <Link to="/register">Register</Link>
                    </AuthLink>
                </Right>
            </Wrapper>

        </Container>
    )
}

export default Header
