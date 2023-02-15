import { Avatar, Box, Flex, Text } from '@chakra-ui/react';
import { useAuthStore } from 'store/AuthStore';

const ProfileMenu = () => {
  const { role } = useAuthStore();
  return (
    <Flex gap="2" alignItems="center">
      <Box borderLeft="2px" borderColor="brand.blue" height="20px" />
      <Avatar name="Dan Abrahmov" src="https://bit.ly/dan-abramov" />
      <Text fontSize="sm" fontWeight="bold">
        @user420 <br />
        <Box as="span" fontSize="xs" fontStyle="italic">
          {role}
        </Box>
      </Text>
    </Flex>
  );
};

export default ProfileMenu;
