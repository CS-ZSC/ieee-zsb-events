"use client";
import { useWindowType } from "@/hooks/use-window-type";
import { Flex, Heading, Stack, Text } from "@chakra-ui/react";
import LogoHorse from "./logo-horse";

export default function Hero() {
  const { isDesktop } = useWindowType();

  return (
    <Flex
      direction={isDesktop ? "row-reverse" : "column"}
      align={"center"}
      justify={"center"}
      w="full"
      spaceX={isDesktop ? 20 : 0}
      padding={isDesktop ? 8 : 2}
    >
      <LogoHorse
        type="blue"
        height={isDesktop ? 720 : 400}
        width={isDesktop ? 720 : 320}
      />
      <Stack
        align={isDesktop ? "start" : "center"}
        justify={"center"}
        spaceY={4}
        maxW={isDesktop ? "500px" : "full"}
      >
        <Heading
          fontSize={isDesktop ? "2rem" : "1.8rem"}
          textAlign={"center"}
          fontWeight={"bold"}
        >
          Events and Competitions gate
        </Heading>
        <Stack
          textAlign={isDesktop ? "start" : "center"}
          maxW={isDesktop ? "600px" : "full"}
          spaceY={-2}
          fontSize={"md"}
        >
          <Text>
            Discover exciting events and competitions organized by IEEE-ZSB.
          </Text>
          <Text>
            Join our community today to participate in events, compete with
            peers, and unlock exclusive opportunities!
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}
