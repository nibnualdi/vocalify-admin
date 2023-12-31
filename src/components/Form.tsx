import { useState } from "react";
import {
  ButtonGroup,
  Button,
  Flex,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useColorModeValue,
  Progress,
  Text,
  useToast,
} from "@chakra-ui/react";

import { ArtistForm, SongForm } from ".";
import {
  useCreateArtistsMutation,
  useCreateSongsMutation,
  useGetArtistsQuery,
} from "../redux/services/song";
import { Song } from "../types";

const FormTabs = (): JSX.Element => {
  const [index, setIndex] = useState(0);
  const toast = useToast();

  const [inputArtistData, setInputArtistData] = useState({
    name: "",
    image_url: "",
  });
  const [inputSongsData, setInputSongsData] = useState<Omit<Song, "id" | "likes" | "listened">>({
    title: "",
    lyric: "",
    genre: "",
    image_url: "",
    song_url: "",
    artist_name: "",
  });

  const { data: artists, isLoading: artistsIsLoading } = useGetArtistsQuery();
  const [createArtist] = useCreateArtistsMutation();
  const [createSong] = useCreateSongsMutation();

  const onNext = () => {
    if (!inputArtistData.name) return;
    const defNoImage =
      "https://cdn.vectorstock.com/i/preview-1x/65/30/default-image-icon-missing-picture-page-vector-40546530.jpg";
    createArtist({
      name: inputArtistData.name,
      image_url: inputArtistData.image_url || defNoImage,
    });
    setIndex(index + 1);
  };

  const onSubmit = () => {
    console.log(inputSongsData.title, inputArtistData.name, inputSongsData.song_url, inputSongsData.image_url, inputSongsData.genre)
    if(!inputSongsData.title) return
    if(!inputArtistData.name) return
    if(!inputSongsData.song_url) return
    if(!inputSongsData.image_url) return
    if(!inputSongsData.genre) return
    createSong({
      title: inputSongsData.title,
      artist_name: inputArtistData.name,
      song_url: inputSongsData.song_url,
      image_url: inputSongsData.image_url,
      genre: inputSongsData.genre,
      lyric: inputSongsData.lyric,
    });
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
  };

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
      <Tabs isFitted variant="unstyled" index={index}>
        <TabList>
          <Tab _selected={{ color: "black" }} color={"gray"}>
            <Text fontWeight={"medium"} isTruncated>
              Artist Form
            </Text>
          </Tab>
          <Tab _selected={{ color: "black" }} color={"gray"}>
            <Text fontWeight={"medium"} isTruncated>
              Song Form
            </Text>
          </Tab>
        </TabList>
        <Progress value={index + 1} max={2} size="xs" colorScheme="blackAlpha" />

        <TabPanels>
          <TabPanel>
            <ArtistForm
              artists={artists}
              artistsIsLoading={artistsIsLoading}
              inputArtistData={inputArtistData}
              setInputArtistData={setInputArtistData}
            />
          </TabPanel>
          <TabPanel>
            <SongForm inputSongsData={inputSongsData} setInputSongsData={setInputSongsData} />
          </TabPanel>
        </TabPanels>
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Button
              onClick={() => setIndex(index - 1)}
              isDisabled={index === 0}
              color={useColorModeValue("gray.800", "gray.500")}
              variant="solid"
              flex={1}
            >
              Back
            </Button>
            {index !== 1 && (
              <Button
                isDisabled={index === 1}
                onClick={onNext}
                color={useColorModeValue("gray.800", "gray.500")}
                borderColor={useColorModeValue("gray.800", "gray.500")}
                variant="outline"
                flex={1}
              >
                Next
              </Button>
            )}
            {index === 1 ? (
              <Button
                color={useColorModeValue("gray.800", "gray.500")}
                borderColor={useColorModeValue("gray.800", "gray.500")}
                variant="outline"
                flex={1}
                onClick={onSubmit}
              >
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Tabs>
    </Box>
  );
};

const Form = () => {
  return <FormTabs />;
};

export default Form;
