import type { NextPage } from 'next';
import { Container, Flex, Heading, Checkbox, Input, SimpleGrid } from '@chakra-ui/react';
import ProductCard from 'components/Cards/ProductCard';
import supplierProducts from 'data/supplierProducts.json';
import { OrderStatus } from 'types/product';

const Supplier: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Flex justifyContent="space-between" gap={5} direction={{ base: 'column', md: 'row' }}>
        <Heading size="lg">Product List</Heading>
        <Flex gap={6} direction={{ base: 'column', md: 'row' }}>
          <Checkbox borderColor="brand.blue">Show only approved product</Checkbox>
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
      </Flex>

      <SimpleGrid columns={[1, 2]} gap={10} placeItems="center" mt={10}>
        {supplierProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} status={product.status as OrderStatus} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Supplier;
