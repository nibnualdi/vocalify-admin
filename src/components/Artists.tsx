import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { ArtistCard } from ".";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const Artists = () => {
  return (
    <Box
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Text fontWeight={"medium"} isTruncated>
        Artists
      </Text>
      <Flex flexWrap={"wrap"} justifyContent={"center"} gap={10}>
        <ArtistCard id="1" name="Pink" imageUrl={IMAGE} numberOfSOngs={10} />
        <ArtistCard id="1" name="Pink" imageUrl={IMAGE} numberOfSOngs={10} />
        <ArtistCard id="1" name="Pink" imageUrl={IMAGE} numberOfSOngs={10} />
        <ArtistCard id="1" name="Pink" imageUrl={IMAGE} numberOfSOngs={10} />
      </Flex>
    </Box>
  );
};

export default Artists;
