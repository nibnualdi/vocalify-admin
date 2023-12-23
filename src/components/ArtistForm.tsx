import { FormLabel, Box, Text, BoxProps } from "@chakra-ui/react";

import { InputAutoComplete, InputFile } from ".";
import { uploadFile } from "../utils";
import { Artist } from "../types";
import { useState } from "react";

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
  const [isLoadingImageUpload, setIsLoadingImageUpload] = useState(false);
  const artistName = artists?.map((e) => e.name);

  const handleChange = (e: string) => {
    const artistFiltered: any = artists?.filter((element) => element.name === e);
    setInputArtistData({ name: e, image_url: artistFiltered?.[0]?.image_url });
  };

  const handleUploadFileToFirebase = async (file: File) => {
    setIsLoadingImageUpload(true);
    const url = await uploadFile({ file, IsArtistOrSong: "artist image" });
    setIsLoadingImageUpload(false);
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
        name="Artist"
        listRecommended={artistName}
        isLoading={artistsIsLoading}
        isRequired
        handleChange={handleChange}
      />
      <InputFile
        labelName="Artist photo"
        buttonName="Add Photo"
        imageURL={inputArtistData.image_url}
        isLoading={isLoadingImageUpload}
        onChange={handleUploadFileToFirebase}
      />
    </Box>
  );
};

export default ArtistForm;
