import { Avatar, Box, Button, Flex, Text } from '@chakra-ui/react';
import Link from 'next/link';

interface Props {
  description: string;
  supplier: string;
  company: string;
  contact: string;
  location: string;
}

const SupplierCard = (props: Props) => {
  const { description, supplier, company, contact, location } = props;

  return (
    <Box w="328px">
      <Link href="/buyer/product/1">
        <Box border="1px" borderColor="brand.blue" rounded="3xl" p={4}>
          <Text fontSize="sm">{description}</Text>

          <Flex justifyContent="space-between" alignItems="center" mt="4">
            <Box>
              <Text fontSize="sm" fontWeight="bold">
                {supplier}
              </Text>
              <Text fontSize="sm" fontWeight="medium">
                {contact}
              </Text>
            </Box>
            <Flex gap={1} alignItems="center">
              <Box>
                <Text fontSize="sm" fontWeight="bold" textAlign="right">
                  {company}
                </Text>
                <Text fontSize="xs" fontWeight="bold" textAlign="right">
                  {location}
                </Text>
              </Box>
              <Avatar name={supplier} />
            </Flex>
          </Flex>
        </Box>
      </Link>
      <Flex justifyContent="center" mt={2}>
        <Link href="/buyer/supplier/1/order">
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

export default SupplierCard;
