import { object, string, mixed, number } from 'yup';

export const ProductSchema = object({
  productID: string().required('Product id is required'),
  treeName: string().required('Tree name is required'),
  woodType: string().required('Wood type is required'),
  location: string().required('Location is required'),
  unitPrice: number().required('Price is required'),
  type: string().required('Type is required'),
  file: mixed(),
});

export const ProductSupplySchema = object({
  amount: number().required('Amount is required'),
  dateCut: string().required('Date cut required'),
  lat: string().required('Latitude is required'),
  lng: string().required('Longitude is required'),
});

export const OrderSchema = object({
  destination: string().required('Destination is required'),
  confirmationDeadline: string().required('Confirmation deadline is required'),
  amountRequest: number().required('Amount request is required'),
  expectedMinDeliveryDate: string().required('Expected min delivery date is required'),
  expectedMaxDeliveryDate: string().required('Expected max delivery date is required'),
});
