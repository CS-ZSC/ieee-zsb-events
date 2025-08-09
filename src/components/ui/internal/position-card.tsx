"use client";

import React from "react";
import type { Speaker } from "@/data/events";
import { Box, Text, Image, HStack, Flex } from "@chakra-ui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";
import { useWindowType } from "@/hooks/use-window-type";
import { toaster } from "@/components/ui/toaster";

interface Props {
  position: Speaker;
  bgColor?: string;
}

export default function PositionCard({
  position,
  bgColor = "primary-5",
}: Props) {
  const { isDesktop } = useWindowType();

  const handleCopy = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigator.clipboard.writeText(position.email);
    toaster.create({
      title: "Email copied!",
      description: `${position.email} has been copied to your clipboard.`,
      type: "success",
      meta: { closable: true },
    });
  };

  return (
    <HStack
      align="stretch"
      justifyContent="start"
      padding={"4px"}
      bgColor={bgColor}
      color="white"
      border="1px solid"
      borderColor="primary-3"
      rounded="2xl"
      gap={isDesktop ? 3 : 2}
    >
      <Image
        rounded={"2xl"}
        boxSize={isDesktop ? "160px" : "120px"}
        src={position.avatarSrc}
        alt={position.name}
        _hover={{ scale: "1.06", borderRadius: "12px 0 0 12px" }}
        transition={"all"}
      />
      <Flex
        paddingX={isDesktop ? 4 : 2}
        paddingY={1}
        flexDirection="column"
        justify="space-between"
        flex={1}
      >
        <Text fontWeight="bold" fontSize="1.3rem" color={"neutral-1"}>
          {position.name}
        </Text>
        <Text fontSize="1.1rem" color="neutral-2">
          {position.title}
        </Text>
        <Box bgColor="primary-3" rounded="full" h="1px" />

        <Link href={position.linkedin} target="_blank">
          <HStack
            color="neutral-3"
            _hover={{ color: "neutral-1" }}
            transition={"all"}
          >
            <Icon icon="mage:linkedin" width={"1.5rem"} height={"1.5rem"} />
            <Text>Linkedin</Text>
          </HStack>
        </Link>
        <HStack
          as="button"
          onClick={handleCopy}
          color="neutral-3"
          _hover={{ color: "neutral-1" }}
          transition="all"
          cursor={"pointer"}
        >
          <Icon
            icon="ic:outline-alternate-email"
            width="1.5rem"
            height="1.5rem"
          />
          <Text>Email</Text>
        </HStack>
      </Flex>
    </HStack>
  );
}
