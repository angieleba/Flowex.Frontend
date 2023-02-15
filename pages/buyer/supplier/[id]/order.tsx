import type { NextPage } from 'next';
import { Box, Button, Container, Heading, Stack } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { OrderSchema } from 'schema/ProductSchema';
import { OrderPayload } from 'types/product';
import LineItem from 'components/Order/LineItem';
import { FaLink } from 'react-icons/fa';
import TextInput from 'components/Inputs/TextInput';
import SelectInput from 'components/Inputs/SelectInput';

const SupplierOrder: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderPayload>({ resolver: yupResolver(OrderSchema) });

  const handleFormSubmit = (data: OrderPayload) => {
    console.log(data);
  };

  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">Add Orders</Heading>

      <Stack as="form" onSubmit={handleSubmit(handleFormSubmit)} gap={5}>
        <Box pl="5" pt="5" maxW="500px">
          <Stack gap="2">
            <LineItem label="Seller Company" value="Company N" />
            <LineItem label="Seller Company Reg. Number" value="1223-8789-128" />
            <LineItem label="Seller contact" value="user6712, xyz@email.com" />

            <SelectInput label="Choose Product">
              <option>Tree 1</option>
            </SelectInput>
          </Stack>
          <Box maxW="400px" p="3" ml="5" mt="5" border="1px" borderColor="brand.blue" rounded="xl">
            <Stack>
              <LineItem label="Product ID" value="#P67645" />
              <LineItem label="Tree Name" value="Mango" />
              <LineItem label="Wood Type" value="Saw Logs" />
              <LineItem label="Color" value="brown" />
              <LineItem label="Location" value="Paris, France" />
              <LineItem label="Price" value="€3 / CFT" />
              <LineItem label="Type" value="Raw" />
              <Button variant="link" leftIcon={<FaLink />} mt={5} justifyContent="flex-start">
                Certification Link
              </Button>
            </Stack>
          </Box>
          <Stack gap={3} mt={5}>
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
      </Stack>
    </Container>
  );
};

export default SupplierOrder;
