import { Box, Button, Flex, Text, Stack } from '@chakra-ui/react';
import LineItem from 'components/Order/LineItem';
import Link from 'next/link';

interface Props {
  product: string;
  treeName: string;
  type: string;
  color: string;
  location: string;
  price: string;
}

const QARequestCard = (props: Props) => {
  const { product, treeName, type, color, location, price } = props;

  return (
    <Box w="328px">
      <Box border="1px" borderColor="brand.blue" rounded="3xl" p={4}>
        <Text fontSize="md" fontWeight="bold">
          {product}
        </Text>

        <Stack>
          <LineItem label="Tree Name" value={treeName} />
          <LineItem label="Type" value={type} />
          <LineItem label="Color" value={color} />
          <LineItem label="Location" value={location} />
          <LineItem label="Price" value={price} />
        </Stack>
      </Box>

      <Flex justifyContent="space-around" mt={2}>
        <Link href="/qa/approve/1">
          <Button
            size="xs"
            bgColor="brand.yellow"
            color="brand.blue"
            _hover={{ bgColor: 'brand.blue', color: 'white' }}
          >
            Approve
          </Button>
        </Link>
        <Button
          size="xs"
          bgColor="brand.maroon"
          color="white"
          _hover={{ bgColor: 'brand.blue', color: 'white' }}
        >
          Reject
        </Button>
      </Flex>
    </Box>
  );
};

export default QARequestCard;
