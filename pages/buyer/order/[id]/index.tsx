import type { NextPage } from 'next';
import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react';
import LineItem from 'components/Order/LineItem';
import { FaLink } from 'react-icons/fa';
import OrderForm from 'components/Forms/OrderForm';

const Order: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">Product Details</Heading>

      <Stack gap={5}>
        <Box pl="5" pt="5" maxW="500px">
          <Stack gap="2">
            <LineItem label="Product ID" value="#P67645" />
            <LineItem label="Tree Name" value="Mango" />
            <LineItem label="Wood Type" value="Saw Logs" />
            <LineItem label="Color" value="brown" />
            <LineItem label="Location" value="Paris, France" />
            <LineItem label="Price" value="€3 / CFT" />
            <LineItem label="Type" value="Raw" />
            <LineItem label="Seller Company" value="Company N" />
            <LineItem label="Seller Company Reg. Number" value="1223-8789-128" />
            <LineItem label="Seller contact" value="user6712, xyz@email.com" />
          </Stack>
          <Button variant="link" leftIcon={<FaLink />} mt={5}>
            Certification Link
          </Button>
        </Box>

        <OrderForm />
      </Stack>
    </Container>
  );
};

export default Order;
