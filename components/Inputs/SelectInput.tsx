import { FormControl, FormLabel, FormErrorMessage, Select, SelectProps } from '@chakra-ui/react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface Props extends SelectProps {
  register?: UseFormRegisterReturn;
  error?: FieldError | undefined;
  label?: string;
  children: React.ReactNode;
}

const SelectInput = (props: Props) => {
  const { register, error, label, children, ...rest } = props;

  return (
    <FormControl isInvalid={!!error}>
      {label && (
        <FormLabel display="flex" fontSize="sm" fontWeight="500" color="brand.blue">
          {label}
        </FormLabel>
      )}
      <Select
        bgColor="white"
        borderColor="brand.blue"
        focusBorderColor="brand.blue"
        fontSize="sm"
        ms={{ base: '0px', md: '0px' }}
        fontWeight="500"
        size="lg"
        _placeholder={{ color: 'blackAlpha.700' }}
        {...register}
        {...rest}
      >
        {children}
      </Select>

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default SelectInput;
