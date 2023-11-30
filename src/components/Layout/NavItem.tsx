import { Box, Flex, Icon, FlexProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { useNavigate } from "react-router-dom";

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: React.ReactNode;
  to: string;
}

const NavItem = ({ icon, children, to, ...rest }: NavItemProps) => {
  const navigate = useNavigate();

  const onClick = ({ to }: { to: string }) => {
    navigate(to);
  };
  const path = location.pathname;

  return (
    <Box
      as="a"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
      onClick={() => onClick({ to })}
    >
      <Flex
        bg={to === path ? "cyan.400" : "transparent"}
        align="center"
        p="4"
        mx="4"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: "cyan.400",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="4"
            fontSize="16"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Box>
  );
};

export default NavItem;
