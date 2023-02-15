import Link from 'next/link';
import { Avatar, Box, Button, Flex, Image, Stack, Text } from '@chakra-ui/react';

interface Props {
  thumbnail: string;
  condition: string;
  date: string;
  avatar: string;
  amount: string;
  productID: string;
  company: string;
  contactEmail: string;
}

const RequestCard = (props: Props) => {
  const { thumbnail, condition, date, avatar, productID, amount, company, contactEmail } = props;

  return (
    <Box w="328px">
      <Link href="/supplier/order/1">
        <Box border="1px" borderColor="brand.blue" rounded="3xl" p={4}>
          <Image src={thumbnail} rounded="3xl" alt="placeholder" width="100%" height="300px" />

          <Stack mt={2}>
            <Flex justifyContent="space-between">
              <Text fontSize="sm" fontWeight="semibold" textTransform="uppercase">
                {condition}
              </Text>
              <Text color="brand.maroon" fontSize="sm" fontWeight="semibold">
                {date}
              </Text>
            </Flex>

            <Flex gap={1} alignItems="center">
              <Avatar name={productID} src={avatar} />
              <Box>
                <Text fontSize="sm" fontWeight="bold">
                  #{productID}
                </Text>
                <Text fontSize="sm" fontWeight="medium">
                  Amount Requested <b>{amount}</b>
                </Text>
              </Box>
            </Flex>

            <Text fontSize="sm" fontWeight="medium">
              Company Name: <b>{company}</b>
            </Text>
            <Text fontSize="sm" fontWeight="medium">
              Contact Email: <b>{contactEmail}</b>
            </Text>
          </Stack>
        </Box>
      </Link>
      <Flex justifyContent="space-around" mt={2}>
        <Link href="/supplier/order/1/confirm">
          <Button
            size="xs"
            bgColor="brand.yellow"
            color="brand.blue"
            _hover={{ bgColor: 'brand.blue', color: 'white' }}
          >
            Confirm Order
          </Button>
        </Link>

        <Link href="/supplier/order/1/reject">
          <Button bgColor="brand.maroon" size="xs">
            Reject Order
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};

export default RequestCard;
