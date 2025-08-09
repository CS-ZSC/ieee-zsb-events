"use client";

import React from "react";
import { Input as ChakraInput, InputProps, Field, HStack } from "@chakra-ui/react";

export default function Input({
  placeholder,
  isInvalid,
  errorMessage,
  label,
  ...props
}: InputProps & {
  errorMessage?: string;
  label?: string;
  isInvalid?: boolean;
}) {
  return (
    <Field.Root invalid={isInvalid} maxW={"400px"} w={"full"}>
      <HStack justifyContent="space-between" w="full">

        {label && <Field.Label>{label}</Field.Label>}
        {errorMessage && <Field.ErrorText ml={4} color={"red.400"}>{errorMessage}</Field.ErrorText>}
      </HStack>
      <ChakraInput
        placeholder={placeholder}
        borderRadius="10px"
        border="1px solid"
        borderColor="primary-3"
        bg="primary-12"
        color="natural-2"
        padding="var(--global-spacing)"
        fontSize={"0.9rem"}
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
    </Field.Root>
  );
}
