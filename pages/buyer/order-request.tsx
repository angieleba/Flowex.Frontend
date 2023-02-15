import type { NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import OrderRequestTable from 'components/Buyer/OrderRequestTable';

const OrderRequest: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">Order Requests</Heading>
      <OrderRequestTable />
    </Container>
  );
};

export default OrderRequest;
