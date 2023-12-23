import { FormLabel, Text, Select, useDisclosure, Collapse } from "@chakra-ui/react";
import { useState } from "react";

type Genre = {
  id: string;
  genre_name: string;
};

interface InputSelectProps {
  name: string;
  data: Genre[];
  noLabel?: boolean;
  isRequired?: boolean;
  handleChange: (e: any) => void;
}

const InputSelect = ({ name, data, noLabel, isRequired, handleChange }: InputSelectProps) => {
  const [value, setValue] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnChange = (e: any) => {
    const input = e.target.value;
    setValue(input);
    handleChange && handleChange(e);
    console.log("tigred change")

    if (!input || input === "default") {
      setErrMessage(`${name} is required`);
      onOpen();
      return;
    }
    setErrMessage("");
    onClose();
  };
  const handleOnBlur = () => {
    console.log("tigred blur")
    if (value) return;
    if (value !== "default") return;
    setErrMessage(`${name} is required`);
    onOpen();
  };

  return (
    <>
      {!noLabel && (
        <FormLabel>
          <Text fontWeight={"medium"} isTruncated>
            {name}
          </Text>
        </FormLabel>
      )}
      <Select variant="outline" onChange={handleOnChange} onBlur={handleOnBlur}>
        <option value="default">select</option>
        {data?.map((e: any) => (
          <option value={e.genre_name} key={e.id}>
            {e.genre_name}
          </option>
        ))}
      </Select>
      {isRequired && (
        <Collapse in={isOpen} animateOpacity>
          <Text fontSize="xs" color="tomato" marginLeft={2}>
            {errMessage}
          </Text>
        </Collapse>
      )}
    </>
  );
};

export default InputSelect;
