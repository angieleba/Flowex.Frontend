import { Box, Stack, Button } from '@chakra-ui/react';
import TextInput from 'components/Inputs/TextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OrderSchema } from 'schema/ProductSchema';
import { OrderPayload } from 'types/product';
import LineItem from 'components/Order/LineItem';

const OrderForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderPayload>({ resolver: yupResolver(OrderSchema) });

  const handleFormSubmit = (data: OrderPayload) => {
    console.log(data);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Box maxW="600px">
        <Stack gap={3} pl="5" mt={5}>
          <TextInput
            label="Destination address"
            placeholder="Enter destination address"
            register={register('destination')}
            error={errors?.destination}
          />
          <TextInput
            type="date"
            label="Confirmation deadline"
            register={register('confirmationDeadline')}
            error={errors?.confirmationDeadline}
          />
          <TextInput
            type="number"
            step="any"
            label="Amount Request"
            placeholder="Enter amount"
            register={register('amountRequest')}
            error={errors?.amountRequest}
          />
          <TextInput
            type="date"
            label="Expected min delivery date "
            register={register('expectedMinDeliveryDate')}
            error={errors?.expectedMinDeliveryDate}
          />
          <TextInput
            type="date"
            label="Expected max delivery date "
            register={register('expectedMaxDeliveryDate')}
            error={errors?.expectedMaxDeliveryDate}
          />

          <LineItem label="Total Estimated Price" value="€345" />

          <Button type="submit">Add Order</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default OrderForm;
