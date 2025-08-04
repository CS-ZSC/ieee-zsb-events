"use client"
import React from "react";
import { Box, Flex, HStack, Button, Heading } from "@chakra-ui/react";
import { redirect } from "next/navigation";
import Logo from "@/components/ui/internal/logo";
import { useWindowType } from "@/hooks/use-window-type";

export default function Header() {
  const { isDesktop } = useWindowType();
  return (
    <Flex justify="center" align="center" margin={16}>
      <Box
        p={5}
        mx="15px"
        as="nav"
        position="fixed"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        height="20"
        maxWidth="min(3000px, calc(100% - 40px))"
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
            <Box borderRightColor={"neutral-1"} px={2} mx={2} borderRightWidth={isDesktop ? 1 : 0}>
              <Logo type="white" width={85} height={50} />
            </Box>
            {isDesktop && <Heading>Events and Competitions</Heading>}
          </HStack>
          <Button
            variant="outline"
            width={"fit"}
            bgColor={"primary-1"}
            // paddingY={10}
            rounded="xl"
            padding={"10px 20px"}
            justifyContent={"center"}
            textAlign="center"
            color="white"
            transition="all"
            _hover={{ backgroundColor: "primary-10" }}
            size={isDesktop ? "xl" : "md"}
            onClick={() => redirect("/auth/login")}
          >
            Login
          </Button>
        </HStack>
      </Box>
    </Flex>
  );
}
