import {
  Flex,
} from "@chakra-ui/react";
import { Songs } from "../components";

const SongsPage = () => {
  return (
    <Flex
      maxW="7xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      flexDirection={"column"}
      gap={10}
    >
      <Songs />
    </Flex>
  );
};

export default SongsPage;
