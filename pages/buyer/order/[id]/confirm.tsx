import type { NextPage } from 'next';
import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react';
import LineItem from 'components/Order/LineItem';
import { FaLink } from 'react-icons/fa';

const ConfirmOrder: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">Product Details</Heading>

      <Box pl="5" pt="5" maxW="500px">
        <Stack gap="2">
          <LineItem label="Product ID" value="#P67645" />
          <LineItem label="Tree Name" value="Mango" />
          <LineItem label="Wood Type" value="Saw Logs" />
          <LineItem label="Color" value="brown" />
          <LineItem label="Location" value="Paris, France" />
          <LineItem label="Price" value="€3 / CFT" />
          <LineItem label="Type" value="Raw" />
          <LineItem label="Seller Company" value="Company X" />
          <LineItem label="Seller Company Reg. Number" value="4569-8766-2890" />
          <LineItem label="Seller contact" value="user3456, xyz@email.com" />
          <LineItem label="Total price" value="€325" />
          <LineItem label="Price Paid" value="€100" />
          <LineItem label="Now Paying" value="€225" />
          <Button variant="link" leftIcon={<FaLink />} mt={5}>
            Certification Link
          </Button>
          <Button>Confirm Order</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default ConfirmOrder;
