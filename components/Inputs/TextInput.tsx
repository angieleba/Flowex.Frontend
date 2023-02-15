import { FormControl, FormLabel, Input, FormErrorMessage, InputProps } from '@chakra-ui/react';
import { UseFormRegisterReturn, FieldError } from 'react-hook-form';

interface Props extends InputProps {
  register?: UseFormRegisterReturn;
  error?: FieldError | undefined;
  label?: string;
}

const TextInput = (props: Props) => {
  const { register, error, label, ...rest } = props;

  return (
    <FormControl isInvalid={!!error}>
      {label && (
        <FormLabel display="flex" fontSize="sm" fontWeight="500" color="brand.blue">
          {label}
        </FormLabel>
      )}
      <Input
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
      />

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

TextInput.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default TextInput;
