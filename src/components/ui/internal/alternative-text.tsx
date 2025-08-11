import React from "react";
import { Text } from "@chakra-ui/react";

export default function AlternativeText({ text }: { text: string }) {
  return (
    <Text
      color={"neutral-1"}
      fontSize={"1.5rem"}
      fontWeight={"bold"}
      fontStyle={"italic"}
      textAlign={"center"}
    >
      {text}
    </Text>
  );
}
