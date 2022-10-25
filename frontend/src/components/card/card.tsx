import type { NextPage } from "next";
import { StyledCard, StyledImage, StyledText } from "./styles";

interface CardProps {
  productInfo: {
    name: string;
    price: string;
    brand: string;
    image: string;
  };
  backgroundColor: string;
  textColor: string;
}

export const Card: NextPage<CardProps> = (props) => {
  const { backgroundColor, textColor, productInfo } = props;
  return (
    <StyledCard backgroundColor={backgroundColor} textColor={textColor}>
      <StyledImage src={productInfo.image}></StyledImage>
      <StyledText fontSize="15px" marginBottom="0px" fontWeight="normal">
        {productInfo.name}
      </StyledText>
      <StyledText fontSize="14px" marginBottom="1px" fontWeight="normal">
        {productInfo.brand}
      </StyledText>
      <StyledText fontSize="26px" marginBottom="0px" fontWeight="bold">
        R$ {productInfo.price}
      </StyledText>
    </StyledCard>
  );
};
