import type { NextPage } from 'next';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Stack,
  RangeSlider,
  RangeSliderTrack,
  RangeSliderFilledTrack,
  RangeSliderThumb,
} from '@chakra-ui/react';
import LineItem from 'components/Order/LineItem';
import { FaLink } from 'react-icons/fa';
import SuppliesTable from 'components/Supplier/SuppliesTable';

const ProductDetails: NextPage = () => {
  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">Product Details</Heading>

      <Stack gap={5}>
        <Box pl="5" pt="5" maxW="500px">
          <Stack gap="2">
            <LineItem label="Product ID" value="#P67645" />
            <LineItem label="Tree Name" value="Mango" />
            <LineItem label="Wood Type" value="Saw Logs" />
            <LineItem label="Color" value="brown" />
            <LineItem label="Location" value="Paris, France" />
            <LineItem label="Price" value="€3 / CFT" />
            <LineItem label="Type" value="Raw" />
            <LineItem label="Status" value="Approved" valueProps={{ color: 'brand.green' }} />
          </Stack>
          <Button variant="link" leftIcon={<FaLink />} mt={5}>
            Certification Link
          </Button>
        </Box>
        <Box pl="5" maxW="700px">
          <Heading size="sm">Quality Indicators</Heading>

          <Stack gap={2} mt="4" direction="row">
            <FormControl display="flex">
              <FormLabel>Density</FormLabel>
              <RangeSlider aria-label={['min', 'max']} defaultValue={[20, 50]} maxW="200px">
                <RangeSliderTrack bgColor="brand.blue">
                  <RangeSliderFilledTrack bgColor="brand.yellow" />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} bgColor="brand.yellow" />
                <RangeSliderThumb index={1} bgColor="brand.yellow" />
              </RangeSlider>
            </FormControl>
            <FormControl display="flex">
              <FormLabel>MFA</FormLabel>
              <RangeSlider aria-label={['min', 'max']} defaultValue={[20, 50]} maxW="200px">
                <RangeSliderTrack bgColor="brand.blue">
                  <RangeSliderFilledTrack bgColor="brand.yellow" />
                </RangeSliderTrack>
                <RangeSliderThumb index={0} bgColor="brand.yellow" />
                <RangeSliderThumb index={1} bgColor="brand.yellow" />
              </RangeSlider>
            </FormControl>
          </Stack>
        </Box>

        <Box pl="5">
          <Heading size="sm">Supplies</Heading>
          <SuppliesTable />
        </Box>
      </Stack>
    </Container>
  );
};

export default ProductDetails;
