import { Box, Stack, Button, Heading, Text } from '@chakra-ui/react';
import TextInput from 'components/Inputs/TextInput';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from 'schema/AuthSchema';
import { LoginPayload } from 'types/auth';
import { Role } from 'types/enums';
import { useAuthStore } from 'store/AuthStore';
import { useRouter } from 'next/router';

const QALoginForm = () => {
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
    } else {
      router.push('/qa/requests');
    }
  };

  return (
    <Box as="form" onSubmit={handleSubmit(handleFormSubmit)}>
      <Heading>From Forest to Floor</Heading>
      <Heading size="md" mt={3}>
        Building a Better World One Board at a Time.
      </Heading>
      <Text fontSize="sm" mt={3}>
        Discover the finest selection of wood products at the click of a button. Our online platform
        connects you with a wide range of high-quality wood options for all your needs.
      </Text>
      <Stack maxW="500px" gap={5} mt="33">
        <TextInput
          label="QA Username"
          placeholder="Enter your username"
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
        <Button type="submit">Login</Button>
      </Stack>
    </Box>
  );
};

export default QALoginForm;
