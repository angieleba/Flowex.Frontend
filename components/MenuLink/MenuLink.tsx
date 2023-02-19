import Link from "next/link";
import { Text, TextProps } from "@chakra-ui/react";
import { useRouter } from "next/router";

type PropTypes = {
  text: string;
  link: string;
  activeColor?: TextProps["color"];
  inactiveColor?: TextProps["color"];
  hoverColor?: TextProps["color"];
} & TextProps;

const MenuLink = ({
  link,
  text,
  activeColor = "brand.yellow",
  inactiveColor = "brand.blue",
  hoverColor = "brand.yellow",
  ...styles
}: PropTypes) => {
  const router = useRouter();
  const isActive = router.pathname === link;

  return (
    <Link href={link}>
      <Text
        borderBottom="1.5px solid transparent"
        textTransform="capitalize"
        fontWeight="bold"
        color={isActive ? activeColor : inactiveColor}
        _hover={{
          color: hoverColor,
        }}
        {...styles}
      >
        {text}
      </Text>
    </Link>
  );
};

export default MenuLink;