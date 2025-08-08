"use client";

import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import ImageBox from "@/components/ui/internal/image-box";
import NavButton from "@/components/ui/internal/nav-button";
import { useWindowType } from "@/hooks/use-window-type";
import DownloadButton from "../../download-button";

interface HeroSectionProps {
  title: string;
  description: string;
  imagePath: string;
  buttonLink: string;
  ruleBook?: string;
}

export default function HeroSection({
  title,
  description,
  imagePath,
  buttonLink,
  ruleBook,
}: HeroSectionProps) {
  const { isMobile } = useWindowType();

  return (
    <Flex
      flexWrap="wrap"
      justifyContent="space-between"
      alignItems="center"
      flexDirection="row-reverse"
      gap={6}
      width="100%"
    >
      <ImageBox
        path={imagePath}
        alt={"Mutex Event"}
        maxWidth="600px"
        mx={isMobile ? "auto" : "0"}
      />
      <Flex
        flexDir={"column"}
        maxWidth="600px"
        gap={4}
        mx={isMobile ? "auto" : "0"}
        justifyContent={isMobile ? "center" : "left"}
        alignItems={isMobile ? "center" : "left"}
      >
        <Text fontSize={"4xl"} color={"neutral-1"} fontWeight={"bold"}>
          {title}
        </Text>
        <Text color={"neutral-2"} whiteSpace={"pre-line"}>
          {description}
        </Text>
        <Flex gap={4} flexWrap="wrap">
          <NavButton link={buttonLink} text="Register Now!" />
          {ruleBook && (
            <DownloadButton link={ruleBook} text="Download Rule-book" />
          )}
        </Flex>
      </Flex>
    </Flex>
  );
}
