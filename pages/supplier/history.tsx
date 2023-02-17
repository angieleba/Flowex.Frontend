import type { NextPage } from 'next';
import { Container, Heading, Card, CardBody, CardFooter, Text, Stack, Image, Badge, Box, StackDivider } from '@chakra-ui/react';
import OrderHistoryTable from 'components/Supplier/OrderHistoryTable';


const OrderHistory: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">Summary Report</Heading>
      <Heading mt={9} size="md">Completed Orders</Heading>
      <OrderHistoryTable />
      <Card
      mt={5}
  direction={{ base: 'column', sm: 'row' }}
  overflow='hidden'
  variant='outline'
>
  <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '500px' }}
    src='https://images.unsplash.com/photo-1425913397330-cf8af2ff40a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80'
    alt='Caffe Latte'
  />

  <Stack >
    <CardBody>
      <Heading mb={3}>
        Summary info
      </Heading>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Total Sell
        </Heading>
        <Text pt='2' fontSize='lg' as='em'>
          200000 €
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Total number of completed orders:
        </Heading>
        <Text pt='2' fontSize='lg' as='em'>
          30
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Average Sell:
        </Heading>
        <Text pt='2' fontSize='lg' as='em'>
         666.67 €
        </Text>
      </Box>

     
    </Stack>
    </CardBody>

    <CardFooter>
      Last updated:  
      <Text>
      <Badge>2023/01/02</Badge> 
      </Text> 
    </CardFooter>
  </Stack>
</Card>
    </Container>
  );
};

export default OrderHistory;
