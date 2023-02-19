import type { NextPage } from "next";
import { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Icon,
  Skeleton,
  SlideFade,
  keyframes,
} from "@chakra-ui/react";
import LineItem from "components/Order/LineItem";
import { FaLink, FaMoneyBillWave, FaUser, FaUserTie } from "react-icons/fa";
import { useRouter } from "next/router";

const slide = keyframes({
  "0%": {
    left: "5%",
  },
  "50%": {
    left: "95%",
  },
  "100%": {
    left: "5%",
  },
});

const ConfirmOrder: NextPage = () => {
  const router = useRouter();
  const [isConfirming, setIsConfirming] = useState(false);

  useEffect(() => {
    if (isConfirming) {
      const timeout = setTimeout(() => {
        router.push("/buyer");
      }, 5000);

      return () => clearTimeout(timeout);
    }
  }, [isConfirming]);

  return (
    <Container maxW="container.xl" py={20} overflowX="hidden">
      <Heading size="lg">Product Details</Heading>

      <Box pl="5" pt="5" maxW="500px">
        <Stack gap="2">
          <LineItem label="Product ID" value="#P67645" />
          <LineItem label="Tree Name" value="Mango" />
          <LineItem label="Wood Type" value="Saw Logs" />
          <LineItem label="Color" value="brown" />
          <LineItem label="Location" value="Paris, France" />
          <LineItem label="Price" value="€3 / CFT" />
          <LineItem label="Type" value="Raw" />
          <LineItem label="Seller Company" value="Company X" />
          <LineItem label="Seller Company Reg. Number" value="4569-8766-2890" />
          <LineItem label="Seller contact" value="user3456, xyz@email.com" />
          <LineItem label="Total price" value="€325" />
          <LineItem label="Price Paid" value="€100" />
          <LineItem label="Now Paying" value="€225" />
          <Button variant="link" leftIcon={<FaLink />} mt={5}>
            Certification Link
          </Button>

          <SlideFade in={isConfirming} offsetY="20px">
            <Flex justify="space-between" align="center">
              <Icon fontSize="2xl" as={FaUser} />
              <Box
                flexGrow={1}
                flexShrink={0}
                flexBasis={1}
                px={2}
                position="relative"
                zIndex={0}
              >
                <Skeleton height={1} rounded="full" />
                <Icon
                  fontSize="2xl"
                  color="brand.yellow"
                  as={FaMoneyBillWave}
                  position="absolute"
                  zIndex={1}
                  top="50%"
                  transform="translate(-50%, -50%)"
                  id="animate-hr"
                  animation={`${slide} 4s infinite linear`}
                />
              </Box>
              <Icon fontSize="2xl" as={FaUserTie} />
            </Flex>
          </SlideFade>
          <Button onClick={() => setIsConfirming(true)}>Confirm Order</Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default ConfirmOrder;