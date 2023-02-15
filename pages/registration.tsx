import type { NextPage } from 'next';
import { Box, Container } from '@chakra-ui/react';
import RegistrationForm from 'components/Forms/RegistrationForm';

const Registration: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Box>
        <RegistrationForm />
      </Box>
    </Container>
  );
};

export default Registration;
