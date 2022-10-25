import type { NextPage } from "next";
import { Card } from "../card";
import { StyledGrid } from "./styles";

interface ProductListProps {
  list: ProductProps[];
}

interface ProductProps {
  name: string;
  price: string;
  brand: string;
  image: string;
}

export const Grid: NextPage<ProductListProps> = (props) => {
  return (
    <StyledGrid>
      {props.list.map((item, index) => {
        return (
          <Card
            key={index}
            productInfo={item}
            backgroundColor="#ffffff"
            textColor="#000000"
          ></Card>
        );
      })}
    </StyledGrid>
  );
};
