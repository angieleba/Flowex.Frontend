import { Avatar, Box, Flex, Text, Badge } from '@chakra-ui/react';
import { useAuthStore } from 'store/AuthStore';
import { Role } from 'types/enums';

const ProfileMenu = () => {
  const { role } = useAuthStore();
  return (
    <Flex gap="2" alignItems="center">
      <Box borderLeft="2px" borderColor="brand.blue" height="20px" />
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Text fontSize="sm" fontWeight="bold">
        @user420 <br />
        <Box as="span" fontSize="xs" fontStyle="italic">
          <Badge variant='outline' colorScheme={role==Role.SUPPLIER ? 'teal' : 'yellow'}>
          {role} account
          </Badge> 
        </Box>
      </Text>
    </Flex>
  );
};

export default ProfileMenu;
