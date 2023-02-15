import type { NextPage } from 'next';
import { Container, Flex, Heading, Input, SimpleGrid } from '@chakra-ui/react';
import RequestCard from 'components/Cards/RequestCard';
import supplierOrders from 'data/supplierOrders.json';

const OrderRequest: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Flex justifyContent="space-between" gap={5} direction={{ base: 'column', md: 'row' }}>
        <Heading size="lg">Order Request</Heading>
        <Input
          color="brand.blue"
          type="search"
          width="350px"
          borderWidth="2px"
          borderColor="brand.blue"
          focusBorderColor="brand.yellow"
          placeholder="Search Product"
          _placeholder={{ color: 'blackAlpha.700' }}
          bg="white"
          py={5}
        />
      </Flex>

      <SimpleGrid columns={[1, 2]} gap={10} placeItems="center" mt={10}>
        {supplierOrders.map((order, idx) => (
          <RequestCard key={idx} {...order} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default OrderRequest;
