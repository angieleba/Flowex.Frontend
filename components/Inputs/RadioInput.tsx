import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  RadioGroup,
  HStack,
  RadioGroupProps,
} from '@chakra-ui/react';
import { FieldError } from 'react-hook-form';

interface Props extends RadioGroupProps {
  error?: FieldError | undefined;
  label?: string;
  children: React.ReactNode;
}

const RadioInput = (props: Props) => {
  const { error, label, children, ...rest } = props;

  return (
    <FormControl isInvalid={!!error}>
      {label && (
        <FormLabel display="flex" fontSize="sm" fontWeight="500" color="brand.blue">
          {label}
        </FormLabel>
      )}

      <RadioGroup colorScheme="blackAlpha" {...rest}>
        <HStack spacing="24px">{children}</HStack>
      </RadioGroup>

      {error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export default RadioInput;
