import {
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  HStack,
  Button,
} from '@chakra-ui/react';
import Pagination from '../Pagination/Pagination';
import PageSize from '../Pagination/PageSize';
import ongoingOrders from 'data/ongoingOrders.json';
import Status from 'components/Cards/Status';
import { OrderStatus } from 'types/product';

const OrderListTable = () => {
  return (
    <TableContainer mt={10}>
      <Table variant="custom" size="sm" border="1px" borderColor="brand.blue">
        <Thead>
          <Tr _odd={{ bgColor: 'transparent' }}>
            <Th>Buyer</Th>
            <Th>Contact</Th>
            <Th>Price (In EURO)</Th>
            <Th>Order Req</Th>
            <Th>Order Approval</Th>
            <Th>Delivery</Th>
            <Th>Location</Th>
            <Th>Product ID</Th>
            <Th>Status</Th>
            <Th>Action</Th>
          </Tr>
        </Thead>
        <Tbody>
          {ongoingOrders.map((item, idx) => (
            <Tr key={idx}>
              <Td alignItems="center">
                <Avatar name={item.buyer} size="xs" /> {item.buyer}
              </Td>
              <Td>{item.contact}</Td>
              <Td>{item.price}</Td>
              <Td>{item.requestDate}</Td>
              <Td>{item.approvalDate}</Td>
              <Td>{item.deliveryDate}</Td>
              <Td>{item.location}</Td>
              <Td>{item.productID}</Td>
              <Td>
                <Status status={item.status as OrderStatus} />
              </Td>

              <Td>
                <Button size="xs" py="4" px="2">
                  Details
                </Button>
              </Td>
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

export default OrderListTable;
