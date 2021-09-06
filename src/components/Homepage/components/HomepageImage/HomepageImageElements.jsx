import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #F4DB7D;
`;

export const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    justify-content: center;
    padding-bottom: 40px;
  }
`;

export const TextContent = styled.div`
  width: 45%;
  @media only screen and (max-width: 1024px) {
    width: 55%;
    margin: 0 24px 0 0;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin: 8px 0 0 0;
  }
`;

export const Text = styled.p`
  margin: 16px 0;
  line-height: 1.7;
  @media only screen and (max-width: 413px) {
    line-height: 1.35;
    margin: 8px 0;
  }
`;

export const InputContent = styled.div`
  width: 100%;
`;

export const ImageContent = styled.div`
  font-size: 14px;
  color: #6e6d7a;
  position: relative;
`;

export const Image = styled.img`
  display: block;
  height: auto;
  max-width: 100%;
  @media screen and (max-width: 768px) {
    max-height: 400px;
  }
`;

export const ImageCredit = styled.span`
  position: absolute;
  right: 265px;
  bottom: 3px;
  z-index: 1;
  @media only screen and (max-width: 1024px) {
    left: 0;
    right: 0;
  }
  @media screen and (max-width: 768px) {
    bottom: 0;
  }
`;

export const StyledLink = styled.a`
  color: #6e6d7a;
  text-decoration: underline;
`;
