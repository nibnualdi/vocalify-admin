import { Button, FormLabel, Image, Input, Text } from "@chakra-ui/react";
import { Loading } from ".";

interface InputFileProps {
  labelName: string;
  buttonName: string;
  imageURL?: string;
  isLoading?: boolean;
  onChange: (file: File) => Promise<void>;
}

const InputFile = ({ labelName, buttonName, imageURL, isLoading, onChange }: InputFileProps) => {
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
            {isLoading ? <Loading size="xs" /> : buttonName}
          </Button>
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

export default InputFile;
