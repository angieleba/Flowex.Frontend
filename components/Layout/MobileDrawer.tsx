import {
  Drawer,
  DrawerOverlay,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  VStack,
} from '@chakra-ui/react';
import Logo from '../Logo/Logo';
import { MenuLinks } from './MenuLinks';

interface IProps {
  onClose: () => void;
  isOpen: boolean;
}

const MobileDrawer = (props: IProps) => {
  const { onClose, isOpen } = props;

  return (
    <Drawer placement="left" onClose={onClose} isOpen={isOpen} closeOnOverlayClick>
      <DrawerOverlay />
      <DrawerContent bg="gradient.bg">
        <DrawerCloseButton fontSize={16} />
        <DrawerHeader borderBottomWidth="1px">
          <Logo />
        </DrawerHeader>
        <DrawerBody>
          <VStack alignItems="flex-start" gap={8} mt={5}>
            <MenuLinks />
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileDrawer;
