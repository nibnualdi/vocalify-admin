import { Collapse, FormLabel, Input, InputProps, Text, useDisclosure } from "@chakra-ui/react";
import { useState } from "react";

interface InputTextProps extends InputProps {
  name: string;
  noLabel?: boolean;
  isRequired?: boolean;
  handleChange?: (e: any) => void;
}

const InputText = ({ name, noLabel, isRequired, handleChange, ...props }: InputTextProps) => {
  const [value, setValue] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnChange = (e: any) => {
    const input = e.target.value;
    setValue(input);
    handleChange && handleChange(input);

    if (!input) {
      setErrMessage(`${name} is required`);
      onOpen();
      return;
    }
    setErrMessage("");
    onClose();
  };
  const handleOnBlur = () => {
    if (value) return;
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
      <Input
        placeholder={name.toLocaleLowerCase()}
        {...props}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
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

export default InputText;
