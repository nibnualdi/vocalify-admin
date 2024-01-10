import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { Error, SongCard, Loading } from ".";
import { useGetSongsQuery } from "../redux/services/song";
import { Link } from "react-router-dom";

const Songs = () => {
  const { data, isLoading, isError } = useGetSongsQuery();

  if (isError) return <Error />;
  return (
    <Box
      px={{ base: 2, md: 4 }}
      py={"5"}
      pb={10}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontWeight={"medium"} isTruncated>
          Songs
        </Text>
        <Button color="blue.500">
          <Link to={"/songs/new"}>Add New</Link>
        </Button>
      </Flex>
      {isLoading ? (
        <Loading />
      ) : (
        <Flex flexDirection={"column"} alignItems={"center"} gap={5} mt={10}>
          {data?.map((e) => (
            <SongCard
              title={e.title}
              imageUrl={e.image_url}
              artistName={e.artist_name}
              key={e.id}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default Songs;
