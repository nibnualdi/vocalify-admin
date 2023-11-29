import {
  Box,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
  useColorModeValue,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { BsPerson } from "react-icons/bs";
import { IoMusicalNoteOutline } from "react-icons/io5";
import { Artists, Songs } from "../components";

interface StatsCardProps {
  title: string;
  stat: string;
  icon: ReactNode;
}

function StatsCard(props: StatsCardProps) {
  const { title, stat, icon } = props;
  return (
    <Stat
      px={{ base: 2, md: 4 }}
      py={"5"}
      shadow={"xl"}
      border={"1px solid"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
    >
      <Flex justifyContent={"space-between"}>
        <Box pl={{ base: 2, md: 4 }}>
          <StatLabel fontWeight={"medium"} isTruncated>
            {title}
          </StatLabel>
          <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
            {stat}
          </StatNumber>
        </Box>
        <Box my={"auto"} color={useColorModeValue("gray.800", "gray.200")} alignContent={"center"}>
          {icon}
        </Box>
      </Flex>
    </Stat>
  );
}

const Dashboard = () => {
  return (
    <Flex
      maxW="7xl"
      mx={"auto"}
      pt={5}
      px={{ base: 2, sm: 12, md: 17 }}
      flexDirection={"column"}
      gap={10}
    >
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard title={"Songs"} stat={"5,000"} icon={<IoMusicalNoteOutline size={"3em"} />} />
        <StatsCard title={"Artists"} stat={"7"} icon={<BsPerson size={"3em"} />} />
      </SimpleGrid>
      <SimpleGrid
        columns={{ base: 1, md: 2 }}
        alignItems={"flex-start"}
        spacing={{ base: 5, lg: 8 }}
      >
        <Songs />
        <Artists />
      </SimpleGrid>
    </Flex>
  );
};

export default Dashboard;
