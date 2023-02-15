import { TableContainer, Table, Thead, Tr, Th, Tbody, Td, Avatar, HStack } from '@chakra-ui/react';
import Pagination from '../Pagination/Pagination';
import PageSize from '../Pagination/PageSize';
import orderHistory from 'data/orderHistory.json';

const OrderHistoryTable = () => {
  return (
    <TableContainer mt={10}>
      <Table variant="custom" size="sm" border="1px" borderColor="brand.blue">
        <Thead>
          <Tr _odd={{ bgColor: 'transparent' }}>
            <Th>Buyer</Th>
            <Th>Contact</Th>
            <Th>Shipping Date</Th>
            <Th>Delivery Date</Th>
            <Th>Origin</Th>
            <Th>Destination</Th>
            <Th>Product ID</Th>
            <Th>Tree Name</Th>
            <Th>Product Type</Th>
            <Th>Amount</Th>
          </Tr>
        </Thead>
        <Tbody>
          {orderHistory.map((item, idx) => (
            <Tr key={idx}>
              <Td alignItems="center">
                <Avatar name={item.buyer} size="xs" /> {item.buyer}
              </Td>
              <Td>{item.contact}</Td>
              <Td>{item.shippingDate}</Td>
              <Td>{item.deliveryDate}</Td>
              <Td>{item.origin}</Td>
              <Td>{item.destination}</Td>
              <Td>{item.productID}</Td>
              <Td>{item.treeName}</Td>
              <Td>{item.productType}</Td>
              <Td>{item.amount}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>

      <HStack mt={5} justifyContent="space-between">
        <PageSize />
        <Pagination />
      </HStack>
    </TableContainer>
  );
};

export default OrderHistoryTable;
