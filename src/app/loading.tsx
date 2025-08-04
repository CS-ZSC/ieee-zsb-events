"use client";
import { MoonLoader } from "react-spinners";
import { Flex } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";

export default function Loading() {
  const indicatorColor = useColorModeValue("black", "white");

  return (
    <Flex
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      justifyContent="center"
      alignItems="center"
    >
      <MoonLoader color={indicatorColor} size={50} />
    </Flex>
  );
}

