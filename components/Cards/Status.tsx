import { Text } from '@chakra-ui/react';
import { useMemo } from 'react';
import { OrderStatus } from 'types/product';

interface Props {
  status: OrderStatus;
}

const Status = ({ status }: Props) => {
  const color = useMemo(() => {
    switch (status) {
      case 'pending':
        return 'brand.yellow';
      case 'rejected':
        return 'brand.maroon';
      case 'approved':
        return 'brand.green';
    }
  }, [status]);
  return (
    <Text fontSize="sm" fontWeight="bold" textTransform="uppercase" color={color}>
      {status}
    </Text>
  );
};

export default Status;
