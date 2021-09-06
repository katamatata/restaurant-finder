import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  font-family: 'Source Sans Pro', sans-serif;
  line-height: 1.2;
  @media only screen and (max-width: 1024px) {
    font-size: 42px;
  }
  @media only screen and (max-width: 768px) {
    font-size: 36px;
  }
  @media only screen and (max-width: 413px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 30px;
  font-family: 'Source Sans Pro', sans-serif;
`;

