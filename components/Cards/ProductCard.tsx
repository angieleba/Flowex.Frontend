import { Avatar, Box, Button, Flex, Image, Text } from '@chakra-ui/react';
import Link from 'next/link';
import { OrderStatus } from 'types/product';
import Status from './Status';

interface Props {
  thumbnail: string;
  condition: string;
  location: string;
  avatar: string;
  productID: string;
  supply: string;
  status: OrderStatus;
}

const ProductCard = (props: Props) => {
  const { thumbnail, condition, location, avatar, productID, supply, status } = props;

  return (
    <Box w="328px">
      <Link href="/supplier/product/1">
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
            <Flex gap={1} alignItems="center">
              <Avatar name={productID} src={avatar} />
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  #{productID}
                </Text>
                <Text fontSize="sm" fontWeight="medium">
                  Supply {supply}
                </Text>
              </Box>
            </Flex>
            <Status status={status} />
          </Flex>
        </Box>
      </Link>
      <Flex justifyContent="space-around" mt={2}>
        {status === 'approved' && (
          <Link href="/supplier/product/1/add-supply">
            <Button
              size="xs"
              bgColor="brand.yellow"
              color="brand.blue"
              _hover={{ bgColor: 'brand.blue', color: 'white' }}
            >
              Add Supply
            </Button>
          </Link>
        )}
        <Button bgColor="brand.maroon" size="xs">
          Remove Product
        </Button>
      </Flex>
    </Box>
  );
};

export default ProductCard;
