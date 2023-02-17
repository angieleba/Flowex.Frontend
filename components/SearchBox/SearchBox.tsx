import { Input } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const SearchBox = () => {
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;

    if (query) {
      router.query.search = query;
    } else {
      delete router.query.search;
    }
    router.push(router);
  };

  return (
    <Input
      color="brand.blue"
      type="search"
      width="350px"
      borderWidth="2px"
      borderColor="brand.blue"
      focusBorderColor="brand.yellow"
      placeholder="Search Product"
      _placeholder={{ color: 'blackAlpha.700' }}
      bg="white"
      py={5}
      onChange={handleChange}
    />
  );
};

export default SearchBox;