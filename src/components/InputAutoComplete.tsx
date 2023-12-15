import { Box, BoxProps, useColorModeValue } from "@chakra-ui/react";
import {
  AutoComplete,
  AutoCompleteCreatable,
  AutoCompleteInput,
  AutoCompleteItem,
  AutoCompleteList,
} from "@choc-ui/chakra-autocomplete";

interface InputAutoCompleteProps extends BoxProps {
  listRecommended?: string[];
  isLoading: boolean;
  inputData: any;
  setInputData: React.Dispatch<
    React.SetStateAction<any>
  >;
}

const InputAutoComplete = ({ listRecommended, isLoading, inputData, setInputData }: InputAutoCompleteProps) => {
  const handleChange = (e: any) => {
    setInputData({...inputData, name: e })
  }
  return (
    <Box border={"1px"} borderColor={useColorModeValue("gray.200", "gray.500")} borderRadius={5}>
      <AutoComplete rollNavigation onChange={handleChange} isLoading={isLoading} creatable>
        <AutoCompleteInput variant="filled" placeholder="Search basic..." autoFocus />
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
  );
};

export default InputAutoComplete;
