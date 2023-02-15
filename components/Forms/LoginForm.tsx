import {
  FormControl,
  FormLabel,
  Box,
  Stack,
  RadioGroup,
  HStack,
  Radio,
  Button,
} from '@chakra-ui/react';
import TextInput from 'components/Inputs/TextInput';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from 'schema/AuthSchema';
import { LoginPayload } from 'types/auth';
import { Role } from 'types/enums';
import { useAuthStore } from 'store/AuthStore';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({ resolver: yupResolver(LoginSchema) });
  const router = useRouter();

  const handleFormSubmit = (data: LoginPayload) => {
    useAuthStore.setState({
      token: 'token_to_be_replaced',
      role: data.role,
    });
    toast.success('Logged in successfully!');

    if (data.role === Role.BUYER) {
      router.push('/buyer');
    } else if (data.role === Role.SUPPLIER) {
      router.push('/supplier');
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Stack maxW="500px" gap={5}>
        <TextInput
          label="Company Name"
          placeholder="Enter your company name"
          register={register('company')}
          error={errors?.company}
        />
        <TextInput
          type="password"
          label="Password"
          placeholder="Type your password"
          register={register('password')}
          error={errors?.password}
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
        <Button type="submit">Login</Button>
      </Stack>
    </Box>
  );
};

export default LoginForm;
