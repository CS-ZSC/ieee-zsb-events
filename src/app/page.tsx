import Image from "next/image";
import { Heading, Stack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Stack align={"center"} justify={"center"} h="vh" w="vw" bgColor={"beige"} color="blackAlpha.700">
      <Image src={"/ieee-logo-blue.svg"} alt="IEEE-Zsb Logo" width={400} height={400} />
      <Heading> Welcome to Our Events Gate!</Heading>
      <Text textDecoration={"underline"}>Under Constructing</Text>
    </Stack>
  );
}
