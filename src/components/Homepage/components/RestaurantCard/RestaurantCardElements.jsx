import styled from "styled-components";

export const Restaurant = styled.div`
  width: 180px;
  min-height: 165px;
  text-align: center;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(84, 84, 90, 0.09), 0 0 0 1px rgba(84, 84, 90, 0.09);
  margin: 16px;
  line-height: 1.5;
  transition: All 0.5s ease;
  background-image: url(${({ imageUrl }) => imageUrl});
  color: white;
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: black;
    opacity: 0.5;
    z-imdex: 1;
  }
  &:hover {
    transform: scale(1.05);
  }
`;

export const Inner = styled.div`
  position: relative;
  z-index: 2;
  padding: 16px;
`;

export const ImageBlock = styled.div`
  width: 224px;
  border-radius: 3px 3px 0 0;
`;

export const Image = styled.img``;

export const Name = styled.div`
  font-weight: 900;
  font-size: 16px;
  img {
    display: block;
    margin: 0 auto 16px;
  }
`;

export const AddressBlock = styled.div`
  display: flex;
`;

export const Address = styled.div`
  font-size: 0.9rem;
  font-weight: normal;
  height: 100%;
  display: flex;
  align-items: center;
`;
