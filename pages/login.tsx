import type { NextPage } from 'next';
import { Box, Container, Stack } from '@chakra-ui/react';
import LoginForm from 'components/Forms/LoginForm';

const Login: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Box position="relative">
        <Stack direction="column" gap="5" maxW="700px" py={10}>
          <Box position="relative">
            <LoginForm />
            <Box
              width="20px"
              height="20px"
              pos="absolute"
              top="0"
              right="10px"
              bg="brand.yellow"
              borderRadius="md"
              transform="rotate(25deg)"
              zIndex="-1"
            />
            <Box
              width="30px"
              height="30px"
              pos="absolute"
              top="12"
              right="30px"
              bg="brand.yellow"
              borderRadius="md"
              transform="rotate(25deg)"
              zIndex="-2"
            />
            <Box
              width="25px"
              height="25px"
              pos="absolute"
              top="16"
              right="35px"
              bg="brand.blue"
              borderRadius="md"
              transform="rotate(35deg)"
              zIndex="-1"
            />
          </Box>
        </Stack>

        <Box display={{ base: 'none', md: 'inherit' }} pt="10">
          <Box
            width="300px"
            height="300px"
            pos="absolute"
            right="-20"
            bottom="0"
            bg="brand.yellow"
            borderRadius="50px"
            transform="rotate(25deg)"
            zIndex="-1"
          />
          <Box
            width="300px"
            height="300px"
            pos="absolute"
            top="150px"
            right="14"
            bottom="0"
            bg="brand.blue"
            borderRadius="50px"
            transform="rotate(15deg)"
            zIndex="-2"
          />
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
