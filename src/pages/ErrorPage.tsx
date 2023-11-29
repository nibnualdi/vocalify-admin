import { useRouteError } from "react-router-dom";
import { Box, Heading, Text, Center, useColorModeValue } from "@chakra-ui/react";

interface ErrorRoute extends Error {
  statusText: string;
  status: string;
  data: string;
}

export default function ErrorPage() {
  const error = useRouteError() as ErrorRoute;

  return (
    <Center py={6}>
      <Box
        w="xs"
        rounded={"sm"}
        my={5}
        mx={[0, 5]}
        overflow={"hidden"}
        bg="white"
        border={"1px"}
        borderColor="black"
        boxShadow={useColorModeValue("6px 6px 0 black", "6px 6px 0 cyan")}
      >
        <Center
          h={"200px"}
          borderBottom={"1px"}
          borderColor="black"
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Text color={"gray.500"} noOfLines={1} fontSize={"xxx-large"}>
            {error.status}
          </Text>
        </Center>
        <Box p={4}>
          <Heading color={"black"} fontSize={"2xl"} noOfLines={1}>
            {error.statusText}
          </Heading>
          <Text color={"gray.500"} noOfLines={2}>
            {error.data}
          </Text>
        </Box>
      </Box>
    </Center>
  );
}
