import { TableContainer, Table, Thead, Tr, Th, Tbody, Td } from '@chakra-ui/react';
import productSupplies from 'data/productSupplies.json';

const SuppliesTable = () => {
  return (
    <TableContainer mt={10}>
      <Table variant="custom" size="sm" border="1px" borderColor="brand.blue">
        <Thead>
          <Tr _odd={{ bgColor: 'transparent' }}>
            <Th>Amount</Th>
            <Th>Date</Th>
            <Th>Latitude</Th>
            <Th>Longitude</Th>
            <Th>Total Est. Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {productSupplies.map((item, idx) => (
            <Tr key={idx}>
              <Td>{item.amount}</Td>
              <Td>{item.date}</Td>
              <Td>{item.latitude}</Td>
              <Td>{item.longitude}</Td>
              <Td>{item.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default SuppliesTable;
