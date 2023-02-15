import type { NextPage } from 'next';
import { Container, Checkbox, Heading, Box, Text, Button, Stack, Flex } from '@chakra-ui/react';
import LineItem from 'components/Order/LineItem';
import TextInput from 'components/Inputs/TextInput';
import Link from 'next/link';

const QAApprove: NextPage = () => {
  return (
    <Container maxW="container.xl" py={10} overflowX="hidden">
      <Heading size="lg" mb="5">
        Request List
      </Heading>

      <Box w="328px">
        <Box border="1px" borderColor="brand.blue" rounded="3xl" p={4}>
          <Text fontSize="md" fontWeight="bold">
            #P45434
          </Text>

          <Stack>
            <LineItem label="Tree Name" value="Mango" />
            <LineItem label="Type" value="Raw" />
            <LineItem label="Color" value="Brown" />
            <LineItem label="Location" value="Berlin, Germany" />
            <LineItem label="Price" value="€3 / CFT" />
          </Stack>
        </Box>

        <Stack gap={5} my={4}>
          <Flex justifyContent="space-between" alignItems="center">
            <Checkbox borderColor="brand.blue">Density</Checkbox>
            <Box>
              <TextInput type="number" placeholder="Max Value" />
              <TextInput type="number" placeholder="Min Value" mt="2" />
            </Box>
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <Checkbox borderColor="brand.blue">MFA</Checkbox>
            <Box>
              <TextInput type="number" placeholder="Max Value" />
              <TextInput type="number" placeholder="Min Value" mt="2" />
            </Box>
          </Flex>
        </Stack>

        <Flex justifyContent="space-around" mt={2}>
          <Link href="/qa/scan">
            <Button
              size="xs"
              bgColor="brand.yellow"
              color="brand.blue"
              _hover={{ bgColor: 'brand.blue', color: 'white' }}
            >
              Approve
            </Button>
          </Link>

          <Button
            size="xs"
            bgColor="brand.maroon"
            color="white"
            _hover={{ bgColor: 'brand.blue', color: 'white' }}
          >
            Reject
          </Button>
        </Flex>
      </Box>
    </Container>
  );
};

export default QAApprove;
