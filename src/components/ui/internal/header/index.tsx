"use client";
import React from "react";
import { Box, Flex, HStack, Heading } from "@chakra-ui/react";
import Logo from "@/components/ui/internal/logo";
import { LogoType } from "@/components/ui/internal/logo";
import { useWindowType } from "@/hooks/use-window-type";
import NavButton from "../nav-button";

export default function Header() {
  const { isDesktop } = useWindowType();
  return (
    <Flex justify="center" align="center" margin={16}>
      <Box
        p={5}
        as="nav"
        position="fixed"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height="20"
        maxWidth="min(3000px, calc(100% - var(--global-spacing) * 2))"
        width="full"
        minWidth="200px"
        boxShadow="lg"
        bgColor={"primary-5"}
        color={"neutral-1"}
        border="1px solid"
        borderColor="primary-3"
        borderRadius="2xl"
        backdropFilter="blur(16px)"
        top={"var(--global-spacing)"}
        zIndex={5}
      >
        <HStack justifyContent="space-between" alignItems="center" width="full">
          <HStack>
            <Box
              pr={2}
              borderRightColor={"neutral-1"}
              borderRightWidth={isDesktop ? 1 : 0}
            >
              <Logo logoType={LogoType.White} width={85} height={50} />
            </Box>
            {isDesktop && <Heading>Events and Competitions</Heading>}
          </HStack>
          <NavButton link="/auth/login" text="Login" />
        </HStack>
      </Box>
    </Flex>
  );
}
