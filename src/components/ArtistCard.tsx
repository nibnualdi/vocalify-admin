import { Box, Center, useColorModeValue, Heading, Text, Stack, Image } from "@chakra-ui/react";

import { CenterProps } from "@chakra-ui/react";

interface ArtistCardProps extends CenterProps {
  name: string;
  imageUrl: string;
  numberOfSOngs: number;
}

const ArtistCard = ({ name, imageUrl, numberOfSOngs, ...rest }: ArtistCardProps) => {
  return (
    <Center
      py={12}
      cursor={"pointer"}
      _hover={{
        transform: "scale(1.05)",
        transitionDuration: "0.2s",
        transitionTimingFunction: "ease-in",
      }}
      {...rest}
    >
      <Box
        role={"group"}
        p={6}
        maxW={"250px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"lg"}
        pos={"relative"}
        zIndex={1}
      >
        <Box
          rounded={"lg"}
          mt={-12}
          pos={"relative"}
          height={"170px"}
          _after={{
            transition: "all .3s ease",
            content: '""',
            w: "full",
            h: "full",
            pos: "absolute",
            top: 5,
            left: 0,
            backgroundImage: `url(${imageUrl})`,
            filter: "blur(15px)",
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: "blur(20px)",
            },
          }}
        >
          <Image
            rounded={"lg"}
            height={200}
            width={282}
            objectFit={"cover"}
            src={imageUrl}
            alt="#"
          />
        </Box>
        <Stack pt={10} align={"center"}>
          <Text color={"gray.500"} fontSize={"sm"} textTransform={"uppercase"}>
            Artist
          </Text>
          <Heading fontSize={"2xl"} fontFamily={"body"} fontWeight={500}>
            {name}
          </Heading>
          <Text color={"gray.600"}>{numberOfSOngs} Songs</Text>
        </Stack>
      </Box>
    </Center>
  );
};

export default ArtistCard;
