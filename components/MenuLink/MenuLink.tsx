import Link from 'next/link';
import { Text } from '@chakra-ui/react';
import { useRouter } from 'next/router';

type PropTypes = {
  text: string;
  link: string;
};

const MenuLink = ({ link, text }: PropTypes) => {
  const router = useRouter();

  return (
    <Link href={link}>
      <Text
        borderBottom="1.5px solid transparent"
        textTransform="capitalize"
        fontWeight="bold"
        color={router.pathname === link ? 'brand.yellow' : 'brand.blue'}
        _hover={{
          color: 'brand.yellow',
        }}
      >
        {text}
      </Text>
    </Link>
  );
};

export default MenuLink;
