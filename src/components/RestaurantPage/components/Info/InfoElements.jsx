import styled from "styled-components";

export const InfoWrapper = styled.div`
  font-size: 14px;
  background-color: white;
  border-radius: 3px;
  padding: 24px 24px;
  width: 50%;
`;

export const Name = styled.h1`
  font-size: 30px;
  font-weight: 900;
`;

export const Rating = styled.div`
  padding-top: 8px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const InfoBlock = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding-top: 8px;
`;

export const InfoBlockItem = styled.p`
  text-transform: lowercase;
`;

export const SpanDot = styled.p`
  padding: 0 5px;
`;

export const AddressBlock = styled.div`
  padding-top: 8px;
`;

export const Icon = styled.img`
  width: 16px;
  display: block;
  margin-right: 5px;
  position: relative;
  top: -1px;
`;
