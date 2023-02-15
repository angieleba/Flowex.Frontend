import { Box, Stack, Button, HStack } from '@chakra-ui/react';
import TextInput from 'components/Inputs/TextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductSupplySchema } from 'schema/ProductSchema';
import { ProductSupplyPayload } from 'types/product';
import LineItem from 'components/Order/LineItem';

const AddSupplyForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductSupplyPayload>({ resolver: yupResolver(ProductSupplySchema) });

  const handleFormSubmit = (data: ProductSupplyPayload) => {
    console.log(data);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Box maxW="600px">
        <Stack gap={3} pl="8" mt={5}>
          <TextInput
            type="number"
            label="Amount"
            placeholder="Enter amount"
            register={register('amount')}
            error={errors?.amount}
          />
          <TextInput
            type="date"
            label="Date Cut"
            register={register('dateCut')}
            error={errors?.dateCut}
          />
          <HStack>
            <TextInput
              type="number"
              step="any"
              label="Latitude"
              placeholder="Latitude"
              register={register('lat')}
              error={errors?.lat}
            />
            <TextInput
              type="number"
              step="any"
              label="Longitude"
              placeholder="Longitude"
              register={register('lng')}
              error={errors?.lng}
            />
          </HStack>

          <LineItem label="Total Estimated Price" value="€345" />

          <Button type="submit">Add Supply</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddSupplyForm;
