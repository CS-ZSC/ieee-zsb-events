import React from "react";
import { Flex, Stack } from "@chakra-ui/react";

interface CardProps {
  children: React.ReactNode;
  padding?: string | number;
  gap?: string | number;
  bgColor?: string;
  rounded?: string;
  maxW?: string | number;
  backDropFilter?: number | string
}

export default function Card({
  children,
  padding = "var(--card-padding)",
  gap = 10,
  bgColor = "primary-5",
  rounded = "2xl",
  maxW,
  backDropFilter
}: CardProps) {
  return (
    <Flex
      w="full"
      h="full"
      maxW={maxW || "100%"}
    >
      <Stack
        w="full"
        align="center"
        justify="center"
        bgColor={bgColor}
        border="1px solid"
        borderColor="primary-3"
        padding={padding}
        rounded={rounded}
        gapY={gap}
        backdropFilter={backDropFilter ?? "0"}
      >
        {children}
      </Stack>
    </Flex>
  );
}
