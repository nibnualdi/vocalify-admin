import { Box, useColorModeValue } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

const InputAutoComplete = () => {
  const options = ["apple", "appoint", "zap", "cap", "japan"];
  return (
    <Box border={"1px"} borderColor={useColorModeValue("gray.200", "gray.500")} borderRadius={5}>
      <AutoComplete rollNavigation>
        <AutoCompleteInput variant="filled" placeholder="Search basic..." autoFocus />
        <AutoCompleteList>
          {options.map((option, oid) => (
            <AutoCompleteItem
              key={`option-${oid}`}
              value={option}
              label={option}
              textTransform="capitalize"
            >
              {option}
            </AutoCompleteItem>
          ))}
        </AutoCompleteList>
      </AutoComplete>
    </Box>
  );
};

export default InputAutoComplete;
