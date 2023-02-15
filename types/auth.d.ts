import { Role } from './enums';

export interface LoginPayload {
  company: string;
  password: string;
  role: Role;
}

export interface RegistrationPayload {
  name: string;
  registrationNumber: string;
  bankName: string;
  accountNumber: string;
  iban: string;
  firstName: string;
  lastName: string;
  dob: string;
  businessPhone: string;
  businessEmail: string;
  vatId: string;
  password: string;
  passwordConfirmation: string;
  role: string;
  kycDoc?: File;
}
