/* eslint-disable react-hooks/rules-of-hooks */
import { TbShoppingBag } from "react-icons/tb";
import { Box, VStack, Button, ButtonGroup } from "@chakra-ui/react";
import useStore from "../Store";

const Cart = () => {
  const cartItems = useStore((state) => state.cartItems);
  const inc = useStore((state) => state.inc);
  const dec = useStore((state) => state.dec);
  const isZero = cartItems == 0;

  return (
    <VStack gap="1rem">
      <Box pos="relative">
        {cartItems !== 0 && (
          <Box
            pos={"absolute"}
            rounded="full"
            w="30px"
            h="30px"
            bg="red"
            display={"flex"}
            color="white"
            right="0"
            alignItems={"center"}
            justifyContent={"center"}
          >
            {cartItems}
          </Box>
        )}
        <TbShoppingBag size="5rem" />
      </Box>
      <ButtonGroup>
        <Button onClick={inc} colorScheme="red">
          Add
        </Button>
        <Button isDisabled={isZero} onClick={dec}>
          Remove
        </Button>
      </ButtonGroup>
    </VStack>
  );
};

export default Cart;
