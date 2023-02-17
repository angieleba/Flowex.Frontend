import type { NextPage } from 'next';
import { Container, Flex, Heading, Checkbox, SimpleGrid, Button } from '@chakra-ui/react';
import ProductCard from 'components/Cards/ProductCard';
import supplierProducts from 'data/supplierProducts.json';
import { OrderStatus } from 'types/product';
import SearchBox from 'components/SearchBox/SearchBox';
import { useMemo } from 'react';
import { useRouter } from 'next/router';
import { FaPlus } from 'react-icons/fa';
import Link from 'next/link';

const Supplier: NextPage = () => {
  const router = useRouter();
  const { search } = router.query;

  const filteredProducts = useMemo(() => {
    if (search) {
      return supplierProducts.filter((item) => item.condition.includes(search as string));
    } else {
      return supplierProducts;
    }
  }, [search]);

  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Link href="/supplier/add-product">
        <Button mb={5} leftIcon={<FaPlus />} colorScheme='teal'>Add Product</Button>
      </Link>
      <Flex justifyContent="space-between" gap={5} direction={{ base: 'column', md: 'row' }}>
        <Heading size="lg">My Product List</Heading>
        <Flex gap={6} direction={{ base: 'column', md: 'row' }}>
          <Checkbox borderColor="brand.blue">Show only approved product</Checkbox>
          <SearchBox />
        </Flex>
      </Flex>

      <SimpleGrid columns={[1, 2]} gap={10} placeItems="center" mt={10}>
        {filteredProducts.map((product, idx) => (
          <ProductCard key={idx} {...product} status={product.status as OrderStatus} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Supplier;