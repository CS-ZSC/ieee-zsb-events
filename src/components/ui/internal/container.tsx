import { Flex } from "@chakra-ui/react";
import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  maxWidth?: string;
  gap?: number;
}

export default function Container({
  children,
  maxWidth = "1200px",
  gap = 4,
}: ContainerProps) {
  return (
    <Flex justify="center" w="full">
      <Flex flexDirection="column" maxWidth={maxWidth} w="full" gap={gap}>
        {children}
      </Flex>
    </Flex>
  );
}
