import { Box, useColorModeValue, Text, Image, Flex } from "@chakra-ui/react";
import { FlexProps } from "@chakra-ui/react";

interface SongCardProps extends FlexProps {
  title: string;
  imageUrl: string;
  artistName: string;
}

const SongCard = ({ title, imageUrl, artistName, ...rest }: SongCardProps) => {
  return (
    <Flex
      maxW={550}
      w={"full"}
      bg={useColorModeValue("white", "gray.800")}
      boxShadow={"2xl"}
      rounded={"lg"}
      alignItems={"center"}
      {...rest}
    >
      <Image rounded={"lg"} height={100} width={100} objectFit={"cover"} src={imageUrl} alt="#" />
      <Box pl={5}>
        <Text fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
          {title}
        </Text>
        <Text color={"gray.600"}>{artistName}</Text>
      </Box>
    </Flex>
  );
};

export default SongCard;
