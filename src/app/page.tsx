import { Heading, Stack, Text } from "@chakra-ui/react";
import Logo from "@/components/ui/internal/logo";

export default function Home() {
  return (
    <Stack align={"center"} justify={"center"} h="vh">
      <Logo width={400} />
      <Heading> Welcome to Our Events Gate!</Heading>
      <Text textDecoration={"underline"}>Under Constructing</Text>
    </Stack>
  );
}
