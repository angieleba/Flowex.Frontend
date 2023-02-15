import type { NextPage } from 'next';
import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import QARequestCard from 'components/Cards/QARequestCard';
import qaRequests from 'data/qaRequests.json';

const Requests: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">Request List</Heading>
      <SimpleGrid columns={[1, 2]} gap={10} placeItems="center" mt={10}>
        {qaRequests.map((product, idx) => (
          <QARequestCard key={idx} {...product} />
        ))}
      </SimpleGrid>
    </Container>
  );
};

export default Requests;
