import { Flex, Heading, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import NavButton from "@/components/ui/internal/nav-button";
import { Icon } from "@iconify/react";

export default function Step3Attendee() {
  return (
    <VStack color="neutral-1" gap={6} position="relative">
      <Flex
        flexDir="column"
        justifyContent="center"
        alignItems="center"
        width="100%"
        position="relative"
        minWidth="300px"
        gap={4}
      >
        <Icon icon="qlementine-icons:success-16" width={24} height={24} />
        <Heading>Registered successfully</Heading>
      </Flex>
      <HStack width={"100%"} gap={5}>
        <NavButton link={"/"} text={"Done"} width="100%" />
        <NavButton link={"/account"} text={"See tickets"} width="100%" />
      </HStack>
    </VStack>
  );
}
