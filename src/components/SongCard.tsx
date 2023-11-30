import { Box, useColorModeValue, Text, Image, Flex, Stack, Icon } from "@chakra-ui/react";
import { FlexProps } from "@chakra-ui/react";
import { EditIcon, CloseIcon } from "@chakra-ui/icons";

interface SongCardProps extends FlexProps {
  title: string;
  imageUrl: string;
  artistName: string;
}

const SongCard = ({ title, imageUrl, artistName, ...rest }: SongCardProps) => {
  return (
    <Flex
      // maxW={550}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      alignItems={"center"}
      justifyContent={"space-between"}
      {...rest}
    >
      <Flex>
        <Image rounded={"lg"} height={100} width={100} objectFit={"cover"} src={imageUrl} alt="#" />
        <Box pl={5}>
          <Text fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {title}
          </Text>
          <Text color={"gray.600"}>{artistName}</Text>
        </Box>
      </Flex>
      <Stack direction="row" spacing={4} pr={5}>
        <Icon
          as={EditIcon}
          w={8}
          h={8}
          color="white"
          backgroundColor={"blue.500"}
          padding={2}
          _hover={{ color: "grey" }}
          boxShadow={"2xl"}
          rounded={"lg"}
        />
        <Icon
          as={CloseIcon}
          w={8}
          h={8}
          color="white"
          backgroundColor={"red.500"}
          padding={2}
          _hover={{ color: "grey" }}
          boxShadow={"2xl"}
          rounded={"lg"}
        />
      </Stack>
    </Flex>
  );
};

export default SongCard;
