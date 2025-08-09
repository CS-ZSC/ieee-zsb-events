import React from "react";
import type { Competition } from "@/data/events";
import { Flex, Stack, Text } from "@chakra-ui/react";
import NavButton from "@/components/ui/internal/nav-button";
import ImageBox from "@/components/ui/internal/image-box";

export default function CompetitionCard({
  competition,
}: {
  competition: Competition;
}) {
  return (
    <Flex flexDir="column" alignItems="center" gap={2} maxW="400px">
      <Text color={"neutral-1"} fontSize={"2xl"} fontWeight={"bold"}>
        {competition.name}
      </Text>
      <Flex w="full" h="full">
        <Stack
          w="full"
          align="center"
          justify="space-between"
          bgColor={"primary-5"}
          border="1px solid"
          borderColor="primary-3"
          padding={"var(--global-spacing)"}
          rounded={"2xl"}
          gap={2}
        >
          <ImageBox
            path={competition.image}
            maxWidth="100%"
            alt={competition.name}
          />
          <Text color={"neutral-2"}>{competition.description}</Text>
          <NavButton
            link={competition.link}
            text="Register Now!"
            width={"full"}
          />
        </Stack>
      </Flex>
    </Flex>
  );
}
