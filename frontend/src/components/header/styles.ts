import styled from "styled-components";

export const StyledHeader = styled.header<{
  backgroundColor: string;
  textColor: string;
}>`
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor}`};
  ${(props) => props.textColor && `color: ${props.textColor}`};
  font-size: 40px;
  font-weight: 700;
  width: 100%;
  padding: 12px 0 12px 50px;
`;
