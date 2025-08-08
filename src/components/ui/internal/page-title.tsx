"use client";

import React from "react";
import { Text } from "@chakra-ui/react";
import AnimatedCard from "./animated-card";

export default function PageTitle({ title }: { title: string }) {
  return (
    <AnimatedCard>
      <Text fontWeight={"bold"} fontSize={"3xl"} textAlign={"center"} color={"neutral-1"}>
        {title}
      </Text>
    </AnimatedCard>
  );
}

