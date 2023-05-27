import React from "react";
import styled from "styled-components";

const ProductWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 30px;
`;

const ProductImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;
  border: 1px solid #666;
`;

const ProductName = styled.h3`
    margin: 10px 0px 0;
    font-size: 14px;
    font-weight: 500;
`;

const ProductPrice = styled.h4`
    margin-bottom: 10px 0 0;
    font-weight: 300;
    font-size: 20px;
`;

const Button = styled.button`
  font-size: 15px;
  font-weight: 500;
  color: #fff;
  background: #916953;
  padding: 10px;
  width: 100px;
  margin-bottom: 20px;
  border: 1px solid #c0b9b9;
  cursor: pointer;

`;

const Product = (props) => {
  const { id, title, description, price, thumbnail } = props.product;

  return (
    <ProductWrapper>
      <ProductImg src={thumbnail} />
      <ProductName>{title}</ProductName>
      <ProductPrice>$ {price}</ProductPrice>
      <Button>Buy Now</Button>
    </ProductWrapper>
  );
};

export default Product;
