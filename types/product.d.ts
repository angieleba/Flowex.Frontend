export type OrderStatus = 'pending' | 'approved' | 'rejected';

export interface ProductPayload {
  productID: string;
  treeName: string;
  woodType: string;
  color: string;
  location: string;
  unitPrice: string;
  type: string;
  file: File;
  density: boolean;
  mfa: boolean;
  moe: boolean;
  mor: boolean;
  fiber_length: boolean;
  fiber_diameter: boolean;
  cell_wall_thickness: boolean;
  cell_wall_coarseness: boolean;
  ratio_chl: boolean;
  fiber_length: boolean;
}

export interface ProductSupplyPayload {
  amount: string;
  dateCut: string;
  lat: string;
  lng: string;
}

export interface OrderPayload {
  destination: string;
  confirmationDeadline: string;
  amountRequest: number;
  expectedMinDeliveryDate: string;
  expectedMaxDeliveryDate: string;
}
