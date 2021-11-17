import styled from "styled-components";

export const Card = styled.div`
  width: 300px;
  min-height: 323px;
  border-radius: 8px;
  box-shadow: 0 1px 4px rgba(84, 84, 90, 0.09), 0 0 0 1px rgba(84, 84, 90, 0.09);
  margin: 16px;
  transition: All 0.5s ease;
  background-color: #FFA89D;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  &:hover {
    transform: scale(1.05);
  }
`;

export const Label = styled.div`
  display: flex;
  align-items: center;
  width: 110px;
  padding: 5px 16px 5px 12px;
  background: rgba(241, 87, 67, 0.44);
  backdrop-filter: blur(17px);
  border-radius: 8px 11px 0px 0px;
  margin-left: 16px;
`;

export const LabelText = styled.p`
  color: #FFF;
  font-size: 12px;
`;

export const CardContent = styled.div`
  line-height: 1.2;
  padding: 16px;
  margin: 0 16px 16px 16px;
  background-color: #FFF;
  border-radius: ${({delivery, pickup}) => (!delivery && !pickup ? "0px 8px 8px 8px" : "8px")};
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TextBlockItem = styled.div`
  display: flex;
  margin-bottom: 5px;
`;

export const Text = styled.p`
  color: #7E7E7E;
  font-weight: 300;
  font-size: 14px;
  text-transform: capitalize;
`;

export const IconsBlock = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const IconsBlockItem = styled.div`
  display: flex;
`;

export const Span = styled.span`
  color: #272844;
`;