import React from "react";
import { Text } from "@chakra-ui/react";

export default function SectionTitle({ title }: { title: string }) {
  return (
    <Text
      fontSize="4xl"
      fontWeight="bold"
      textAlign="center"
      color={"neutral-1"}
    >
      {title}
    </Text>
  );
}
