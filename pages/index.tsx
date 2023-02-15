import type { NextPage } from 'next';
import { Box, Button, Container, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Box position="relative">
        <Stack direction="column" gap="5" maxW="700px">
          <Box position="relative">
            <Box
              width="60px"
              height="60px"
              pos="absolute"
              top="-1"
              left="-2"
              bg="brand.yellow"
              borderRadius="xl"
              transform="rotate(25deg)"
              zIndex="-1"
            />
            <Heading size="3xl">From Forest to Floor</Heading>
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
          <Heading size="2xl">
            Building a Better World <br /> One Board at a Time.
          </Heading>

          <Text fontSize="lg" fontWeight="medium" maxW="600px">
            Discover the finest selection of wood products at the click of a button. Our online
            platform connects you with a wide range of high-quality wood options for all your needs.
          </Text>

          <HStack justifyContent="center" maxW="600px">
            <Link href="/registration">
              <Button
                bgColor="brand.yellow"
                color="brand.blue"
                _hover={{ bgColor: 'brand.blue', color: 'white' }}
              >
                Join Now
              </Button>
            </Link>
            <Button>Learn More</Button>
          </HStack>
        </Stack>

        <Box overflow="hidden" display={{ base: 'none', md: 'inherit' }} pt="10">
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

export default Home;
