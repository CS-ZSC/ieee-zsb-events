"use client";

import React from "react";
import { Input as ChakraInput, InputProps } from "@chakra-ui/react";

export default function Input({ placeholder, ...props }: InputProps) {
  return (
    <ChakraInput
      placeholder={placeholder}
      borderRadius="10px"
      border="1px solid"
      borderColor="primary-3"
      bg="primary-12"
      color="natural-2"
      padding="var(--global-spacing)"
      maxW={"400px"}
      w={"full"}
      fontSize={"1.1rem"}
      outline={"none"}
      transition={"all 0.2s ease-in-out"}
      _focus={{
        borderColor: "primary-2",
        boxShadow: "0 0 0 1px primary-4",
      }}
      _placeholder={{
        color: "neutral-3",
      }}
      {...props}
    />
  );
}
