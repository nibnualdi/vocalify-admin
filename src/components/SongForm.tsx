import { Flex, FormLabel, Select, Textarea, Text } from "@chakra-ui/react";
import { useGetGenresQuery } from "../redux/services/song";
import { InputText } from ".";

const SongForm = () => {
  const { data } = useGetGenresQuery();

  return (
    <>
      <InputText isRequired name="Title" />
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
    </>
  );
};

export default SongForm;
