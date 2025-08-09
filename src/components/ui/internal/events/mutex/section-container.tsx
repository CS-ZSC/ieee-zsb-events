import { Flex } from "@chakra-ui/react";
import React from "react";

export default function SectionContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Flex
      flexDir={"column"}
      alignItems="center"
      justifyContent="center"
      gap={4}
    >
      {children}
    </Flex>
  );
}
