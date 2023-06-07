import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    background-color: #2A2D34;
    height:70px;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    `
    


const Footer = () => {
  return (
    <Container>
        &copy; All rights reserved.
    </Container>
  )
}

export default Footer
