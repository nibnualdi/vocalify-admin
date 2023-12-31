import {
  Collapse,
  FormLabel,
  Input,
  InputProps,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";
import { useState } from "react";

interface InputTextProps extends InputProps {
  name: string;
  noLabel?: boolean;
  type?: "text" | "textarea";
  isRequired?: boolean;
  handleChange?: ({ key, value }: { key: string; value: string }) => void;
}

const InputText = ({
  name,
  noLabel,
  type = "text",
  isRequired,
  handleChange,
  ...props
}: InputTextProps) => {
  const [value, setValue] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnChange = (e: any) => {
    const input = e.target.value;
    setValue(input);
    handleChange && handleChange({ key: name.replace(" ", "_").toLocaleLowerCase(), value: input });

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
      {type === "text" ? (
        <Input
          placeholder={name.toLocaleLowerCase()}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
          {...props}
        />
      ) : (
        <Textarea
          placeholder={name.toLocaleLowerCase()}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
      )}
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
