import { SimpleGrid, Text, TextProps } from '@chakra-ui/react';

interface Props {
  label: string;
  value: string;
  labelProps?: TextProps;
  valueProps?: TextProps;
}

const LineItem = ({ label, value, labelProps, valueProps }: Props) => {
  return (
    <SimpleGrid columns={2}>
      <Text {...labelProps}>{label}</Text>
      {value && (
        <Text fontWeight="bold" {...valueProps}>
          {value}
        </Text>
      )}
    </SimpleGrid>
  );
};

export default LineItem;
