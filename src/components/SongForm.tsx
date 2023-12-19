import { Flex, FormLabel, Input, Select, Textarea, Text } from "@chakra-ui/react";

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

export default SongForm;
