import type { NextPage } from 'next';
import { Box, Container } from '@chakra-ui/react';
import AddProductForm from 'components/Forms/AddProductForm';

const AddProduct: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Box>
        <AddProductForm />
      </Box>
    </Container>
  );
};

export default AddProduct;
