import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import { ArtistCard, Error, Loading } from ".";
import { useGetArtistsQuery } from "../redux/services/song";

const Artists = () => {
  const { data, isLoading, isError } = useGetArtistsQuery();

  if (isError) return <Error />;
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
      {isLoading ? (
        <Loading />
      ) : (
        <Flex flexWrap={"wrap"} justifyContent={"center"} gap={10}>
          {data?.map((e) => (
            <ArtistCard
              id={e.id}
              name={e.name}
              imageUrl={e.image_url}
              numberOfSOngs={e.number_of_songs}
              key={e.id}
            />
          ))}
        </Flex>
      )}
    </Box>
  );
};

export default Artists;
