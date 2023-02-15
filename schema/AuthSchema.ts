import { object, string, ref, mixed } from 'yup';

export const LoginSchema = object({
  company: string().required('Company is required'),
  password: string().required('Password is required'),
  role: string(),
});

export const RegistrationSchema = object({
  name: string().required('Company name is required'),
  registrationNumber: string().required('Registration number is required'),
  bankName: string().required('Bank name is required'),
  accountNumber: string().required('Account number is required'),
  iban: string().required('IBAN is required'),
  firstName: string().required('First name is required'),
  lastName: string().required('Last name is required'),
  dob: string().required('Date of birth is required'),
  businessPhone: string().required('Business phone number is required'),
  businessEmail: string()
    .email('Please enter a valid email')
    .required('Business email is required'),
  vatId: string().required('Vat ID is required'),
  password: string()
    .required('Password is required')
    .min(6, 'Password must be at least 6 characters'),
  passwordConfirmation: string().oneOf([ref('password')], 'Passwords must match'),
  role: string().required('Role is required'),
});

// export const PasswordChangeSchema = object({
//   old_password: string().required('Old password is required'),
//   new_password: string()
//     .required('Password is required')
//     .min(6, 'Password must be at least 6 characters'),
//   new_password_confirm: string().oneOf([ref('new_password'), null], 'Passwords must match'),
// });

// export const ProfileSchema = object({
//   first_name: string(),
//   last_name: string(),
//   phone_number: string(),
//   profile_pic_url: mixed(),
// });
