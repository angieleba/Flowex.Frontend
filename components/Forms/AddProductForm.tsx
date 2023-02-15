import {
  FormControl,
  FormLabel,
  Box,
  Stack,
  Button,
  Heading,
  Radio,
  Checkbox,
  Flex,
} from '@chakra-ui/react';
import TextInput from 'components/Inputs/TextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ProductSchema } from 'schema/ProductSchema';
import { ProductPayload } from 'types/product';
import SelectInput from 'components/Inputs/SelectInput';
import RadioInput from 'components/Inputs/RadioInput';

const AddProductForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductPayload>({ resolver: yupResolver(ProductSchema) });

  const handleFormSubmit = (data: ProductPayload) => {
    console.log(data);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Box maxW="600px">
        <Heading size="md">Product Details</Heading>
        <Stack gap={3} pl="8" mt={5}>
          <TextInput
            label="Product ID"
            placeholder="#P78865"
            register={register('productID')}
            error={errors?.productID}
          />
          <TextInput
            label="Tree Name"
            placeholder="Enter name of tree"
            register={register('treeName')}
            error={errors?.treeName}
          />
          <SelectInput
            label="Type of Wood"
            placeholder="Select type"
            register={register('woodType')}
            error={errors?.woodType}
          >
            <option value="Saw Logs">Saw Logs</option>
          </SelectInput>
          <TextInput
            type="color"
            label="Choose Color"
            register={register('color')}
            error={errors?.color}
          />
          <TextInput
            label="Location"
            placeholder="Enter location"
            register={register('location')}
            error={errors?.location}
          />
          <TextInput
            type="number"
            label="Price Per Unit"
            placeholder="Enter price per Unit (in Euro)"
            register={register('unitPrice')}
            error={errors?.unitPrice}
          />
          <RadioInput label="Select Type" error={errors?.type} defaultValue="raw" ringColor="red">
            <Radio value="raw" {...register('type')}>
              Raw
            </Radio>
            <Radio value="preprocessed" {...register('type')}>
              Preprocessed
            </Radio>
          </RadioInput>

          <TextInput
            type="file"
            label="Upload File"
            register={register('file')}
            error={errors?.file}
          />

          <FormControl>
            <FormLabel>Quality Indicator</FormLabel>
            <Flex gap={3} flexWrap="wrap" justifyContent="flex-start">
              {qualityIndicators.map((item) => (
                <Checkbox key={item.name} {...register(item.name as keyof ProductPayload)}>
                  {item.label}
                </Checkbox>
              ))}
            </Flex>
          </FormControl>

          <Button type="submit">Add Product</Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default AddProductForm;

const qualityIndicators = [
  {
    name: 'density',
    label: 'Density',
  },
  {
    name: 'mfa',
    label: 'MFA',
  },
  {
    name: 'moe',
    label: 'MOE',
  },
  {
    name: 'mor',
    label: 'MOR',
  },
  {
    name: 'fiber_length',
    label: 'Fiber length',
  },
  {
    name: 'fiber_diameter',
    label: 'Fiber diameter',
  },
  {
    name: 'cell_wall_thickness',
    label: 'Cell wall thickness',
  },
  {
    name: 'cell_wall_coarseness',
    label: 'Cell wall coarseness',
  },
  {
    name: 'ratio_chl',
    label: 'Ratio of cellulose, hemicellulose and lignin',
  },
  {
    name: 'fiber_length',
    label: 'Fiber length',
  },
];
