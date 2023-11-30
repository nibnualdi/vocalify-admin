import { Box, Flex, Heading, Icon, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { SongCard } from "../components";

const IMAGE =
  "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";

const ArtistDetail = () => {
  return (
    <Box
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Box
        role={"group"}
        p={6}
        // maxW={"250px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"170px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${IMAGE})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image rounded={"lg"} height={200} width={282} objectFit={"cover"} src={IMAGE} alt="#" />
        </Box>
        <Flex pt={10} w={"100%"} maxW={282} justifyContent={"space-between"}>
          <Stack align={"flex-start"}>
            <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
              Artist
            </Text>
            <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
              Pink
            </Heading>
            <Text color={"gray.600"}>11 Songs</Text>
          </Stack>
          <Icon
            as={EditIcon}
            w={8}
            h={8}
            color="grey"
            cursor={"pointer"}
            padding={2}
            _hover={{ color: "black" }}
            boxShadow={"2xl"}
            rounded={"lg"}
          />
        </Flex>
      </Box>

      <Flex flexDirection={"column"} alignItems={"center"} gap={5} mt={10}>
        <SongCard title="Once upon a time" imageUrl={IMAGE} artistName="Pink" />
        <SongCard title="Once upon a time" imageUrl={IMAGE} artistName="Pink" />
        <SongCard title="Once upon a time" imageUrl={IMAGE} artistName="Pink" />
        <SongCard title="Once upon a time" imageUrl={IMAGE} artistName="Pink" />
      </Flex>
    </Box>
  );
};

export default ArtistDetail;
