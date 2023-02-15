import { Box, Text, Container, Flex, HStack, Icon, Divider } from '@chakra-ui/react';
import { IoLogoInstagram, IoLogoFacebook, IoLogoTwitter, IoLogoYoutube } from 'react-icons/io5';
import Logo from '../Logo/Logo';
import MenuLink from '../MenuLink/MenuLink';
import menuLinks from 'data/menuLinks.json';

const Footer = () => {
  return (
    <Box as="footer">
      <Container
        maxW="container.xl"
        bg="gradient.footer"
        borderTopRadius="40px"
        py="10"
        px={{ base: 5, md: 20 }}
      >
        <Flex justifyContent="space-between" gap={5} flexDir={{ base: 'column', md: 'row' }}>
          <HStack gap={{ base: 5, md: 10 }} flexDir={{ base: 'column', md: 'row' }}>
            {menuLinks.map((item) => (
              <MenuLink key={item.name} text={item.name} link={item.link} />
            ))}
          </HStack>
          <HStack gap="5" justifyContent={{ base: 'center', md: 'initial' }}>
            <Icon as={IoLogoFacebook} fontSize="2xl" />
            <Icon as={IoLogoTwitter} fontSize="2xl" />
            <Icon as={IoLogoInstagram} fontSize="2xl" />
            <Icon as={IoLogoYoutube} fontSize="2xl" />
          </HStack>
        </Flex>
        <Divider borderColor="blackAlpha.200" my={5} />
        <Flex
          justifyContent="space-between"
          alignItems="center"
          flexDir={{ base: 'column-reverse', md: 'row' }}
          gap="5"
        >
          <Text fontSize="sm" fontWeight="medium">
            &copy; {new Date().getFullYear()} Flowex. All rights reserved.
          </Text>
          <Logo />
          <HStack gap="5">
            <Text as="a" href="#!" fontSize="sm" fontWeight="medium">
              Terms of Service
            </Text>
            <Text as="a" href="#!" fontSize="sm" fontWeight="medium">
              Privacy Policy
            </Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
