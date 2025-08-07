"use client";
import { useWindowType } from "@/hooks/use-window-type";
import { Box, Button, Flex, Heading, HStack, Stack, Text } from "@chakra-ui/react";
import { redirect } from "next/navigation";

export function InnerInfoCard({ name, link, description }: EventCardProps) {
    const { isDesktop } = useWindowType();
    return (
        <HStack p={6} spaceX={4} width="100%" borderTopRadius={isDesktop ? "xl" : 0} borderBottomRadius={"xl"} alignItems="center" justifyContent="space-between" bgColor={"primary-5"}  border={"1px solid"} borderColor={"primary-3"} backdropFilter={"blur(10px)"}>
            <Flex justify="center" align="center" textAlign={"center"} h="100px" width="40%" borderRightColor={"primary-3"} borderRightWidth="1px" paddingRight="20px">
                <Heading size="4xl" w="200px" text>{name}</Heading>
            </Flex>
            <Stack justify={"space-between"} h="full">
                <Text fontSize={"sm"}>
                    {description.substring(0, 80)}...
                </Text>
                <Button
                    variant="outline"
                    width={"full"}
                    bgColor={"primary-1"}
                    rounded="10px"
                    padding={"10px 20px"}
                    justifyContent={"center"}
                    textAlign="center"
                    color="white"
                    transition="all"
                    _hover={{ backgroundColor: "primary-10" }}
                    size={isDesktop ? "md" : "md"}
                    onClick={() => redirect(link)}
                >
                    Register
                </Button>
            </Stack>
        </HStack >
    );
}