"use client";

import { VStack, Flex, Box, Heading } from "@chakra-ui/react";
import BackButton from "./back-button";
import Input from "@/components/ui/internal/input";
import CustomButton from "./custom-button";
import { useState } from "react";
import { Portal, Select, createListCollection } from "@chakra-ui/react";

const Competitions = createListCollection({
  items: [
    { label: "Semaphore", value: "semaphore" },
    { label: "Deadlock CTF", value: "deadlock-ctf" },
    { label: "Eco-Entrepreneurship", value: "eco-entrepreneurship" },
    { label: "Formula Firefighting", value: "formula-firefighting" },
  ],
});

export default function Step3Leader({
  handleBack,
  handleNext,
}: {
  handleBack: () => void;
  handleNext: () => void;
}) {
  const [teamName, setTeamName] = useState("");
  const [selectedCompetition, setSelectedCompetition] = useState<string[]>([]);

  function handleCreateTeam() {
    // TODO: Implement team creation logic
    handleNext();
  }

  return (
    <VStack color="neutral-1" gap={6} position="relative">
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        position="relative"
      >
        <Box position="absolute" left={0}>
          <BackButton handleBack={handleBack} />
        </Box>
        <Box>
          <Heading size="md" textAlign="center">
            Create a team
          </Heading>
        </Box>
      </Flex>

      <Flex flexDir="column" gap={3}>
        <Input
          placeholder="Team Name"
          color="neutral-1"
          minWidth="300px"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        {/* {teamName && (
          <Flex pl={4} gap={2}>
            <Text>Checking name</Text>
            <Box color="primary-1">
              <Icon icon={"svg-spinners:270-ring"} width={20} height={20} />
            </Box>
          </Flex>
        )} */}

        <DropDownSelection
          selectedCompetition={selectedCompetition}
          setSelectedCompetition={setSelectedCompetition}
        />
      </Flex>

      <CustomButton label="Create team" onClick={handleCreateTeam} />
    </VStack>
  );
}

function DropDownSelection({
  selectedCompetition,
  setSelectedCompetition,
}: {
  selectedCompetition: string[];
  setSelectedCompetition: (comp: string[]) => void;
}) {
  return (
    <Select.Root
      collection={Competitions}
      size="lg"
      width="320px"
      bgColor={"primary-12"}
      outline={"none"}
      borderRadius="10px"
      border="1px solid"
      borderColor="primary-3"
      color="natural-2"
      cursor={"pointer"}
      value={selectedCompetition}
      multiple={false}
      onValueChange={(e) => setSelectedCompetition(e.value)}
    >
      <Select.Control>
        <Select.Trigger
          cursor={"pointer"}
          border="none"
          outline="none"
          _focus={{ outline: "none", boxShadow: "none" }}
          _focusVisible={{ outline: "none", boxShadow: "none" }}
        >
          <Select.ValueText placeholder="Select competition" />
        </Select.Trigger>
        <Select.IndicatorGroup>
          <Select.Indicator />
        </Select.IndicatorGroup>
      </Select.Control>
      <Portal>
        <Select.Positioner>
          <Select.Content color={"neutral-1"} bg={"primary-3"} rounded={"2xl"}>
            {Competitions.items.map((competition) => (
              <Select.Item item={competition} key={competition.value}>
                {competition.label}
                <Select.ItemIndicator />
              </Select.Item>
            ))}
          </Select.Content>
        </Select.Positioner>
      </Portal>
    </Select.Root>
  );
}
