import styled from "styled-components";

export const StyledCard = styled.header<{
  backgroundColor: string;
  textColor: string;
}>`
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.textColor && `color: ${props.textColor}`};
  width: 241.47px;
  height: 234.57px;
  border: 1px solid #000000;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 17px 20px 13px;
  display: flex;
  flex-direction: column;
`;

export const StyledImage = styled.img`
  width: 100%;
  margin-bottom: 8px;
  max-height: 123.61px;
`;

export const StyledText = styled.span<{
  fontSize: string;
  marginBottom: string;
  fontWeight: string;
}>`
  ${(props) => props.fontSize && `font-size: ${props.fontSize}`};
  ${(props) => props.marginBottom && `margin-bottom: ${props.marginBottom}`};
  ${(props) => props.fontWeight && `font-weight: ${props.fontWeight}`};
`;
