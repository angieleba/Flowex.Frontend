import type { NextPage } from 'next';
import { Container, Heading } from '@chakra-ui/react';
import Scanner from 'components/Mobile/Scanner';

const QAScan: NextPage = () => {
  return (
    <Container maxW="container.xl" py={10} overflowX="hidden">
      <Heading size="lg" mb="5">
        Scan QR Code
      </Heading>

      <Scanner />
    </Container>
  );
};

export default QAScan;
