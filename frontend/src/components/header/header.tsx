import type { NextPage } from "next";
import { StyledHeader } from "./styles";

interface HeaderProps {
  title: string;
  backgroundColor: string;
  textColor: string;
}

export const Header: NextPage<HeaderProps> = (props) => {
  const { title, backgroundColor, textColor } = props;
  return (
    <StyledHeader backgroundColor={backgroundColor} textColor={textColor}>
      {title}
    </StyledHeader>
  );
};
