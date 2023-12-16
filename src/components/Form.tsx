import { useState } from "react";
import {
  ButtonGroup,
  Button,
  Flex,
  FormLabel,
  Input,
  Select,
  Textarea,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Box,
  useColorModeValue,
  Progress,
  Text,
  Image,
  BoxProps,
} from "@chakra-ui/react";
import {} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { InputAutoComplete } from ".";
import { useCreateArtistsMutation, useGetArtistsQuery } from "../redux/services/song";
import { uploadFile } from "../utils";
import { Artist } from "../types";

interface InputFileProps {
  labelName: string;
  buttonName: string;
  onChange: (file: File) => Promise<void>;
}

const InputFile = ({ labelName, buttonName, onChange }: InputFileProps) => {
  return (
    <>
      <FormLabel>
        <Text fontWeight={"medium"} isTruncated>
          {labelName}
        </Text>
      </FormLabel>
      <label style={{ position: "relative", cursor: "pointer" }}>
        {true ? (
          <Button variant="outline" colorScheme="yellow" position={"absolute"}>
            {buttonName}
          </Button>
        ) : (
          <Image />
        )}
        <Input
          type="file"
          placeholder="First name"
          opacity={0}
          id="photo"
          onChange={(e) => {
            e.target.files && onChange(e.target.files[0]);
          }}
        />
      </label>
    </>
  );
};

interface ArtistFormProps extends BoxProps {
  artists?: Artist[];
  artistsIsLoading: boolean;
  inputArtistData: Omit<Artist, "id" | "number_of_songs">;
  setInputArtistData: React.Dispatch<
    React.SetStateAction<{
      name: string;
      image_url: string;
    }>
  >;
}

const ArtistForm = ({
  artists,
  artistsIsLoading,
  inputArtistData,
  setInputArtistData,
}: ArtistFormProps) => {
  const artistName = artists?.map((e) => e.name);
  const artistFiltered = artists?.filter((e) => e.name === inputArtistData.name);

  const handleUploadFileToFirebase = async (file: File) => {
    const url = await uploadFile({ file, imageArtistOrSong: "artist" });
    if (url) setInputArtistData({ ...inputArtistData, image_url: url });
  };

  return (
    <Box display={"block"}>
      <FormLabel>
        <Text fontWeight={"medium"} isTruncated>
          Artist name
        </Text>
      </FormLabel>
      <InputAutoComplete
        listRecommended={artistName}
        isLoading={artistsIsLoading}
        inputData={inputArtistData}
        setInputData={setInputArtistData}
      />
      {artistFiltered?.length ? (
        <Image src={artistFiltered[0]?.image_url} />
      ) : (
        <InputFile
          labelName="Artist photo"
          buttonName="Add Photo"
          onChange={handleUploadFileToFirebase}
        />
      )}
    </Box>
  );
};
const SongForm = () => {
  return (
    <>
      <FormLabel>
        <Text fontWeight={"medium"} isTruncated>
          Song name
        </Text>
      </FormLabel>
      <Input placeholder="title" />
      <Flex>
        {/* <InputFile labelName="Song file" buttonName="Add Song" />
        <InputFile labelName="Song image" buttonName="Add Image" /> */}
      </Flex>
      <FormLabel>
        <Text fontWeight={"medium"} isTruncated>
          Lyric
        </Text>
      </FormLabel>
      <Textarea placeholder="lyric" />
      <FormLabel>
        <Text fontWeight={"medium"} isTruncated>
          Genre
        </Text>
      </FormLabel>
      <Select variant="outline">
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </Select>
    </>
  );
};

const FormTabs = (): JSX.Element => {
  const [index, setIndex] = useState(0);
  const toast = useToast();

  const [inputArtistData, setInputArtistData] = useState({
    name: "",
    image_url: "",
  });

  const { data: artists, isLoading: artistsIsLoading } = useGetArtistsQuery();
  const [createArtist, { data }] = useCreateArtistsMutation();
  console.log("qwerty: ", data);

  const onNext = () => {
    console.log(inputArtistData);
    createArtist({ name: inputArtistData.name, image_url: inputArtistData.image_url });
    setIndex(index + 1);
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
            <SongForm />
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
                onClick={() => {
                  toast({
                    title: "Account created.",
                    description: "We've created your account for you.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                  });
                }}
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
