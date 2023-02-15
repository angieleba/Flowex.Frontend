import type { NextPage } from 'next';
import { Container } from '@chakra-ui/react';
import CustomMap from 'components/Map/CustomMap';

const MapPage: NextPage = () => {
  return (
    <Container maxW="container.xl" py={10} overflowX="hidden">
      <CustomMap />
    </Container>
  );
};

export default MapPage;
