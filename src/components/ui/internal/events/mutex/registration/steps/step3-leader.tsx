"use client";

import { useState } from "react";
import { VStack, Flex, Box, Heading } from "@chakra-ui/react";
import BackButton from "../back-button";
import Input from "@/components/ui/internal/input";
import CustomButton from "../custom-button";
import { Portal, Select, createListCollection } from "@chakra-ui/react";
import { toaster } from "@/components/ui/toaster";
import { createTeam } from "@/api/team";
import { redirect } from "next/navigation";

const Competitions = createListCollection({
  items: [
    { label: "Semaphore", value: "semaphore" },
    { label: "Deadlock CTF", value: "deadlock-ctf" },
    { label: "Formula Firefighting", value: "formula-firefighting" },
    { label: "Eco-Entrepreneurship", value: "eco-entrepreneurship" },
  ],
});

const competitionIdMap: Record<string, number> = {
  semaphore: 1,
  "deadlock-ctf": 3,
  "formula-firefighting": 4,
  "eco-entrepreneurship": 5,
};

export default function Step3Leader({
  handleBack,
  handleNext,
}: {
  handleBack: () => void;
  handleNext: () => void;
}) {
  const [teamName, setTeamName] = useState("");
  const [selectedCompetition, setSelectedCompetition] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  async function handleCreateTeam() {
    if (!teamName.trim() || !selectedCompetition.length) {
      toaster.error({
        closable: true,
        title: "Missing Fields",
        description: "Please enter a team name and select a competition.",
        duration: 3000,
      });
      return;
    }

    const competitionId = competitionIdMap[selectedCompetition[0]];
    if (competitionId === undefined) {
      toaster.error({
        closable: true,
        title: "Invalid Competition",
        description: "The selected competition is not recognized.",
        duration: 3000,
      });
      return;
    }

    setLoading(true);

    const result = await createTeam({
      name: teamName,
      competitionId,
    });

    setLoading(false);

    if (result.success) {
      toaster.success({
        closable: true,
        title: "Team Created",
        description: "Your team has been successfully created.",
        duration: 5000,
      });
      redirect("/");
    } else {
      toaster.error({
        closable: true,
        title: "Team Creation Failed",
        description: result.message || "Please try again later.",
        duration: 5000,
      });
    }
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
        <Heading size="md" textAlign="center">
          Create a team
        </Heading>
      </Flex>

      <Flex flexDir="column" gap={3}>
        <Input
          placeholder="Team Name"
          color="neutral-1"
          minWidth="300px"
          value={teamName}
          onChange={(e) => setTeamName(e.target.value)}
        />

        <DropDownSelection
          selectedCompetition={selectedCompetition}
          setSelectedCompetition={setSelectedCompetition}
        />
      </Flex>

      <CustomButton
        label="Create team"
        onClick={handleCreateTeam}
        loading={loading}
        loadingText="Creating..."
      />
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
