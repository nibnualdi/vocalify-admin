import {
  Flex,
} from "@chakra-ui/react";
import { Artists } from "../components";

const ArtistsPage = () => {
  return (
    <Flex
      maxW="7xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      flexDirection={"column"}
      gap={10}
    >
      <Artists />
    </Flex>
  );
};

export default ArtistsPage;
