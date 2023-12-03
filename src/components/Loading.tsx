import { Box, BoxProps, Spinner } from "@chakra-ui/react";

const Loading = (props: BoxProps) => {
  return (
    <Box textAlign="center" py={10} px={6} {...props}>
      <Spinner margin="auto" size="xl" />
    </Box>
  );
};

export default Loading;
