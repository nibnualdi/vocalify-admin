import { Button, FormLabel, Image, Input, Text } from "@chakra-ui/react";

interface InputFileProps {
  labelName: string;
  buttonName: string;
  imageURL?: string;
  key?: string;
  onChange: ({ key, file }: { key: string; file: File }) => Promise<void>;
}

const InputFile = ({ labelName, buttonName, imageURL, key, onChange }: InputFileProps) => {
  return (
    <>
      <FormLabel>
        <Text fontWeight={"medium"} isTruncated>
          {labelName}
        </Text>
      </FormLabel>
      <label style={{ position: "relative", cursor: "pointer" }}>
        {imageURL ? (
          <Image src={imageURL} />
        ) : (
          <Button variant="outline" colorScheme="yellow" position={"absolute"}>
            {buttonName}
          </Button>
        )}
        <Input
          type="file"
          placeholder="First name"
          opacity={0}
          id="photo"
          onChange={(e) => {
            e.target.files && onChange({ key: key ? key : labelName, file: e.target.files[0] });
          }}
        />
      </label>
    </>
  );
};

export default InputFile;
