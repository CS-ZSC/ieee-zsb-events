"use client";

import React from "react";
import type { Event } from "@/data/events";
import SectionTitle from "@/components/ui/internal/section-title";
import SectionDescription from "@/components/ui/internal/section-description";
import { Flex, SimpleGrid } from "@chakra-ui/react";
import CompetitionCard from "@/components/ui/internal/events/mutex/competition-card";
import { useWindowType } from "@/hooks/use-window-type";

export default function Competitions({ event }: { event: Event }) {
  const { isDesktop } = useWindowType();

  return (
    <Flex
      flexDir={"column"}
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
      <SectionTitle title="Competitions" />
      <SectionDescription description={event.competitionsDescription} />

      <SimpleGrid
        columns={isDesktop ? 2 : 1}
        justifyContent="center"
        gap={8}
        p={4}
      >
        {event.competitions.map((competition) => (
          <CompetitionCard key={competition.id} competition={competition} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
