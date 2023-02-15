import {
  FormControl,
  FormLabel,
  Box,
  Stack,
  RadioGroup,
  HStack,
  Radio,
  Button,
  Heading,
} from '@chakra-ui/react';
import TextInput from 'components/Inputs/TextInput';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegistrationSchema } from 'schema/AuthSchema';
import { RegistrationPayload } from 'types/auth';

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegistrationPayload>({ resolver: yupResolver(RegistrationSchema) });

  const role = watch('role');

  const handleFormSubmit = (data: RegistrationPayload) => {
    console.log(data);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack gap={5} maxW="600px">
        <Box>
          <Heading size="md">Company Details</Heading>
          <Stack gap={3} pl="8" mt={5}>
            <TextInput
              label="Name"
              placeholder="Enter your company name"
              register={register('name')}
              error={errors?.name}
            />
            <TextInput
              label="Registration Number"
              placeholder="Enter registration number"
              register={register('registrationNumber')}
              error={errors?.registrationNumber}
            />
          </Stack>
        </Box>

        <Box>
          <Heading size="md">Bank Details</Heading>
          <Stack gap={3} pl="8" mt={5}>
            <TextInput
              label="Bank Name"
              placeholder="Enter your bank name"
              register={register('bankName')}
              error={errors?.bankName}
            />
            <TextInput
              label="Account Number"
              placeholder="Enter your account number"
              register={register('accountNumber')}
              error={errors?.accountNumber}
            />
            <TextInput
              label="IBAN"
              placeholder="Enter IBAN number"
              register={register('iban')}
              error={errors?.iban}
            />
          </Stack>
        </Box>

        <Box>
          <Heading size="md">UBO Profile</Heading>
          <Stack gap={3} pl="8" mt={5}>
            <TextInput
              label="First Name"
              placeholder="Enter your first name"
              register={register('firstName')}
              error={errors?.firstName}
            />
            <TextInput
              label="Last Name"
              placeholder="Enter your last name"
              register={register('lastName')}
              error={errors?.lastName}
            />
            <TextInput
              type="date"
              label="Date of Birth"
              placeholder="mm-dd-yyyy"
              register={register('dob')}
              error={errors?.dob}
            />
            <TextInput
              label="Business Phone Number"
              placeholder="+xxx xxxx xxx xxx"
              register={register('businessPhone')}
              error={errors?.businessPhone}
            />
            <TextInput
              type="email"
              label="Business Email"
              placeholder="your-email@email.com"
              register={register('businessEmail')}
              error={errors?.businessEmail}
            />
            <TextInput
              label="VAT ID"
              placeholder="Enter your VAT ID"
              register={register('vatId')}
              error={errors?.vatId}
            />
            <TextInput
              type="password"
              label="Password"
              placeholder="Type a strong password"
              register={register('password')}
              error={errors?.password}
            />
            <TextInput
              type="password"
              label="Confirm Password"
              placeholder="Type your password again"
              register={register('passwordConfirmation')}
              error={errors?.passwordConfirmation}
            />

            <FormControl display="flex" isInvalid={!!errors?.role}>
              <FormLabel mr={{ base: 2, md: 10 }}>Choose your role</FormLabel>
              <RadioGroup defaultValue="buyer" colorScheme="blackAlpha">
                <HStack spacing="24px">
                  <Radio value="buyer" {...register('role')}>
                    Buyer
                  </Radio>
                  <Radio value="supplier" {...register('role')}>
                    Supplier
                  </Radio>
                </HStack>
              </RadioGroup>
            </FormControl>
            {role === 'supplier' && (
              <TextInput
                type="file"
                label="Upload KYC Document"
                register={register('kycDoc')}
                error={errors?.kycDoc}
              />
            )}
            <Button type="submit">Join</Button>
          </Stack>
        </Box>
      </Stack>
    </Box>
  );
};

export default RegistrationForm;
