import { Box, BoxProps, Spinner } from "@chakra-ui/react";

interface LoadingProps extends BoxProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
}

const Loading = ({ size = "xl", ...props }: LoadingProps) => {
  return (
    <Box textAlign="center" py={10} px={6} {...props}>
      <Spinner margin="auto" size={size} />
    </Box>
  );
};

export default Loading;
