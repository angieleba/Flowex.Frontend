import type { NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import OrderListTable from 'components/Supplier/OrderListTable';

const OngoingOrders: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">All Orders</Heading>
      <OrderListTable />
    </Container>
  );
};

export default OngoingOrders;
