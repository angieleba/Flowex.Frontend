import { Avatar, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { OrderStatus } from 'types/product';

interface Props {
  thumbnail: string;
  condition: string;
  location: string;
  avatar: string;
  productID: string;
  supply: string;
  status: OrderStatus;
}

const BuyerProduct = (props: Props) => {
  const { thumbnail, condition, location, avatar, productID, supply } = props;

  return (
    <Box w="328px">
      <Link href="/buyer/order/1">
        <Box border="1px" borderColor="brand.blue" rounded="3xl" p={4}>
          <Image src={thumbnail} rounded="3xl" alt="placeholder" width="100%" height="300px" />

          <Flex justifyContent="space-between" mt={2}>
            <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">
              {condition}
            </Text>
            <Text fontSize="sm" fontWeight="semibold">
              {location}
            </Text>
          </Flex>

          <Flex justifyContent="space-between" alignItems="center" mt="1">
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                Contact Name
              </Text>
              <Text fontSize="sm" fontWeight="medium">
                Supply {supply}
              </Text>
            </Box>
            <Flex gap={1} alignItems="center">
              <Text fontSize="sm" fontWeight="bold">
                Company
              </Text>
              <Avatar name={productID} src={avatar} />
            </Flex>
          </Flex>
        </Box>
      </Link>
      <Flex justifyContent="center" mt={2}>
        <Link href="/buyer/order/1">
          <Button
            size="xs"
            bgColor="brand.yellow"
            color="brand.blue"
            _hover={{ bgColor: 'brand.blue', color: 'white' }}
          >
            Order
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default BuyerProduct;
