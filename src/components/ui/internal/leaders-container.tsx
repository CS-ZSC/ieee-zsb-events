"use client";

import { Grid, GridItem } from "@chakra-ui/react";
import PositionCard from "@/components/ui/internal/position-card";
import type { Speaker } from "@/data/events";
import { useWindowType } from "@/hooks/use-window-type";

interface Props {
  positions: Speaker[];
  positionBgColor?: string;
}

export default function LeadersContainer({
  positions,
  positionBgColor,
}: Props) {
  const { isDesktop } = useWindowType();

  return (
    <Grid
      templateColumns={{
        base: "1fr",
        md: positions.length >= 2 ? "repeat(2, 1fr)" : "1fr",
      }}
      gap="var(--global-spacing)"
    >
      {positions.map((position) => (
        <GridItem
          key={position.id ?? position.name}
          justifySelf="center"
          maxW={
            isDesktop && positions.length === 1
              ? "calc(50% - var(--global-spacing) / 2)"
              : "full"
          }
          w="full"
        >
          <PositionCard position={position} bgColor={positionBgColor} />
        </GridItem>
      ))}
    </Grid>
  );
}
