import type { NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import OrderHistoryTable from 'components/Buyer/OrderHistoryTable';

const OrderHistory: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">Order History</Heading>
      <OrderHistoryTable />
    </Container>
  );
};

export default OrderHistory;
