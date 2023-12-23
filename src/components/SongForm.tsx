import { Flex, Box, BoxProps } from "@chakra-ui/react";
import { useGetGenresQuery } from "../redux/services/song";
import { InputFile, InputSelect, InputText } from ".";
import { Song } from "../types";
import { uploadFile } from "../utils";
import { useState } from "react";

interface SongFormProps extends BoxProps {
  inputSongsData: Omit<Song, "id" | "likes" | "listened">;
  setInputSongsData: React.Dispatch<React.SetStateAction<Omit<Song, "id" | "likes" | "listened">>>;
}

const SongForm = ({ inputSongsData, setInputSongsData, ...props }: SongFormProps) => {
  const [isLoadingSongUpload, setIsLoadingSongUpload] = useState(false);
  const [isLoadingImageUpload, setIsLoadingImageUpload] = useState(false);
  const { data } = useGetGenresQuery();

  const handleChange = ({ key, value }: { key: string; value: string }) => {
    setInputSongsData({ ...inputSongsData, [key]: value });
  };

  const handleUploadSongToFirebase = async (file: File) => {
    setIsLoadingSongUpload(true);
    const url = await uploadFile({ file, IsArtistOrSong: "song file" });
    setIsLoadingSongUpload(false);
    if (url) setInputSongsData({ ...inputSongsData, song_url: url });
  };

  const handleUploadImageToFirebase = async (file: File) => {
    setIsLoadingImageUpload(true);
    const url = await uploadFile({ file, IsArtistOrSong: "song image" });
    setIsLoadingImageUpload(false);
    if (url) setInputSongsData({ ...inputSongsData, image_url: url });
  };

  const handleSelect = (e: any) => {
    const value = e.target.value;
    if (value === "default") return;
    setInputSongsData({ ...inputSongsData, genre: value });
  };

  return (
    <Box {...props}>
      <InputText isRequired name="Title" handleChange={handleChange} />
      <Flex>
        <InputFile
          labelName="Song file"
          buttonName="Add Song"
          key="song_url"
          isLoading={isLoadingSongUpload}
          onChange={handleUploadSongToFirebase}
        />
        <InputFile
          labelName="Song image"
          buttonName="Add Image"
          key="image_url"
          isLoading={isLoadingImageUpload}
          onChange={handleUploadImageToFirebase}
        />
      </Flex>
      <InputText name="Lyric" type="textarea" handleChange={handleChange} />
      <InputSelect name="Genre" data={data || []} handleChange={handleSelect} isRequired />
    </Box>
  );
};

export default SongForm;
