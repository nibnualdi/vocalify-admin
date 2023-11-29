import { useState } from "react";
import {
  Box,
  CloseButton,
  Flex,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  BoxProps,
} from "@chakra-ui/react";
import { FiHome, FiTrendingUp, FiCompass, FiStar, FiSettings } from "react-icons/fi";
import { IconType } from "react-icons";
import NavItem from "./NavItem";

interface LinkItemProps {
  name: string;
  icon: IconType;
  to: string;
}

interface SidebarContentProps extends BoxProps {
  onClose: () => void;
}

interface SidebarProps {
  onClose: () => void;
  isOpen: boolean;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Dashboard", icon: FiHome, to: "/" },
  { name: "Trending", icon: FiTrendingUp, to: "/" },
  { name: "Explore", icon: FiCompass, to: "/" },
  { name: "Favourites", icon: FiStar, to: "/" },
  { name: "Settings", icon: FiSettings, to: "/" },
];

const SidebarContent = ({ onClose, ...rest }: SidebarContentProps) => {
  const [selectedNav, setSelectedNav] = useState<string>("Dashboard");

  return (
    <Box
      transition="3s ease"
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold">
          Vocalify
        </Text>
        <CloseButton display={{ base: "flex", md: "none" }} onClick={onClose} />
      </Flex>
      {LinkItems.map((link) => (
        <NavItem
          key={link.name}
          icon={link.icon}
          to={link.to}
          name={link.name}
          selectedNav={selectedNav}
          setSelectedNav={setSelectedNav}
        >
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const Sidebar = ({ onClose, isOpen }: SidebarProps) => {
  return (
    <>
      {/* Dekstop */}
      <SidebarContent onClose={() => onClose} display={{ base: "none", md: "block" }} />

      {/* Mobile */}
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full"
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Sidebar;
