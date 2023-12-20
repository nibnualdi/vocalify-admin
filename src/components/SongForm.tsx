import { Flex, FormLabel, Select, Textarea, Text, Box, BoxProps } from "@chakra-ui/react";
import { useGetGenresQuery } from "../redux/services/song";
import { InputText } from ".";
import { Song } from "../types";

interface SongFormProps extends BoxProps {
  inputSongsData: Omit<Song, "id" | "likes" | "listened">;
  setInputSongsData: React.Dispatch<React.SetStateAction<Omit<Song, "id" | "likes" | "listened">>>;
}

const SongForm = ({ inputSongsData, setInputSongsData, ...props }: SongFormProps) => {
  const { data } = useGetGenresQuery();

  const handleChange = ({ key, value }: { key: string; value: string }) => {
    setInputSongsData({ ...inputSongsData, [key]: value });
  };

  return (
    <Box {...props}>
      <InputText isRequired name="Title" handleChange={handleChange} />
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
        {data?.map((e) => (
          <option value="option1" key={e.id}>
            {e.genre_name}
          </option>
        ))}
      </Select>
    </Box>
  );
};

export default SongForm;
