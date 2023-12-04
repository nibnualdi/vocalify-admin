import { Box, Flex, Heading, Icon, Image, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import { Error, Loading, SongCard } from "../components";
import { useGetArtistByIdQuery, useGetSongsByArtistNameQuery } from "../redux/services/song";
import { useParams } from "react-router-dom";

const ArtistDetail = () => {
  const { id } = useParams();
  const {
    data: artist,
    isLoading: loadingArtist,
    isError: errorArtist,
  } = useGetArtistByIdQuery(id || "");
  const {
    data: songs,
    isLoading: loadingSongs,
    isError: errorSongs,
  } = useGetSongsByArtistNameQuery(artist?.name || "", { skip: !artist });

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
        {loadingArtist ? (
          <Loading />
        ) : (
          <>
            {errorArtist ? (
              <Error />
            ) : (
              <>
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
                    backgroundImage: `url(${artist?.image_url})`,
                    filter: "blur(15px)",
                    zIndex: -1,
                  }}
                  _groupHover={{
                    _after: {
                      filter: "blur(20px)",
                    },
                  }}
                >
                  <Image
                    rounded={"lg"}
                    height={200}
                    width={282}
                    objectFit={"cover"}
                    src={artist?.image_url}
                    alt="#"
                  />
                </Box>
                <Flex pt={10} w={"100%"} maxW={282} justifyContent={"space-between"}>
                  <Stack align={"flex-start"}>
                    <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
                      Artist
                    </Text>
                    <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
                      {artist?.name}
                    </Heading>
                    <Text color={"gray.600"}>{artist?.number_of_songs} Songs</Text>
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
              </>
            )}
          </>
        )}
      </Box>

      {loadingSongs ? (
        <Loading />
      ) : (
        <>
          {errorSongs ? (
            <Error />
          ) : (
            <Flex flexDirection={"column"} alignItems={"center"} gap={5} mt={10}>
              {songs?.map((e) => (
                <SongCard
                  title={e.title}
                  imageUrl={e.image_url}
                  artistName={e.artist_name}
                  key={e.id}
                />
              ))}
            </Flex>
          )}
        </>
      )}
    </Box>
  );
};

export default ArtistDetail;
