import Link from "next/link";
import {
  Box,
  Flex,
  Button,
  HStack,
  Container,
  useBoolean,
  Image,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { IoMenu } from "react-icons/io5";
import { useAuthStore } from "store/AuthStore";
import MobileDrawer from "./MobileDrawer";
import Logo from "../Logo/Logo";
import { MenuLinks } from "./MenuLinks";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useBoolean(false);
  const { token, logout } = useAuthStore();
  const [background, setBackground] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);
    if (window.scrollY >= 66) {
      setBackground(true);
    } else {
      setBackground(false);
    }
  };

  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground);
  });
  //
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      background={background ? "#975A16" : "none"}
      transition="all 1s ease"
    >
      <Container maxW="container.xl" px="0" position="relative">
        <Image
          src="images/shapes/rectangle.png"
          position="absolute"
          zIndex="-1"
          left="-20"
          top="-16"
        />
        <Box py="4" px="2">
          <Flex as="nav" justifyContent="space-between" alignItems="center">
            <Link href="/">
              <Logo />
            </Link>

            {token ? (
              <>
                <HStack gap={7} display={{ base: "none", md: "flex" }}>
                  <MenuLinks />
                  <ProfileMenu />
                </HStack>
              <Button display={{ base: "none", md: "flex" }} onClick={logout}>
                Logout
              </Button>
              </>
            ) : (
              <>
                <HStack gap={7} display={{ base: "none", md: "flex" }}>
                  <MenuLinks />
                </HStack>
                <Link href="/login">
                  <Button display={{ base: "none", md: "flex" }}>Login</Button>
                </Link>
              </>
            )}

            <Button
              variant="link"
              onClick={setDrawerOpen.on}
              display={{ md: "none" }}
            >
              <IoMenu size="30" />
            </Button>
          </Flex>
          <MobileDrawer onClose={setDrawerOpen.off} isOpen={drawerOpen} />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
