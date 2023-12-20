import { Box, BoxProps, Collapse, Text, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteCreatable,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";
import { useState } from "react";

interface InputAutoCompleteProps extends BoxProps {
  name: string;
  listRecommended?: string[];
  isLoading: boolean;
  isRequired?: boolean;
  handleChange?: (e: string) => void;
}

const InputAutoComplete = ({
  name,
  listRecommended,
  isLoading,
  isRequired,
  handleChange,
}: InputAutoCompleteProps) => {
  const [value, setValue] = useState("");
  const [errMessage, setErrMessage] = useState("");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleOnChange = (e: string) => {
    setValue(e);
    handleChange && handleChange(e);

    if (!e) {
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
      <Box border={"1px"} borderColor={useColorModeValue("gray.200", "gray.500")} borderRadius={5}>
        <AutoComplete
          rollNavigation
          onChange={handleOnChange}
          isLoading={isLoading}
          creatable
          value={value}
        >
          <AutoCompleteInput variant="filled" placeholder={name} autoFocus onBlur={handleOnBlur} />
          <AutoCompleteList>
            {listRecommended?.map((option, oid) => (
              <AutoCompleteItem
                key={`option-${oid}`}
                value={option}
                label={option}
                textTransform="capitalize"
              >
                {option}
              </AutoCompleteItem>
            ))}
            <AutoCompleteCreatable />
          </AutoCompleteList>
        </AutoComplete>
      </Box>
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

export default InputAutoComplete;
