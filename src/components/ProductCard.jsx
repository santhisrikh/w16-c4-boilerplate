import { Flex } from "./Styled";

export const ProductCard = ({ item }) => {
  return (
    <>
      <Flex data-testid="single-product-item" key={item.id}>
        {/* display item info here  */}
      </Flex>
    </>
  );
};
