"use client";
import { useWindowType } from "@/hooks/use-window-type";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import LogoHorse from "./logo-horse";
import { redirect } from "next/navigation";

export function Hero() {
    const { isDesktop } = useWindowType();
    return (
        <Flex direction={isDesktop ? "row-reverse" : "column"} align={"center"} justify={"center"} w="full" spaceX={isDesktop ? 20 : 0} padding={isDesktop ? 10 : 2}>
            <LogoHorse type="blue" height={isDesktop ? 720 : 400} width={isDesktop ? 720 : 320}/>
            <Stack align={isDesktop ? "start" : "center"} justify={"center"} spaceY={4} maxW={isDesktop ? "500px" : "full"}>
                <Heading>
                    Events and Competitions gate
                </Heading>
                <Stack textAlign={isDesktop ? "start" : "center"} maxW={isDesktop ? "500px" : "full"} spaceY={1}>
                    <Text>Learn, compete and win through the events and competitions IEEE-ZSB organizes.</Text>
                    <Text>Create an account and register to any of the events and competitions easily without entering you data again!</Text>
                </Stack>
                <Button
                    variant="outline"
                    width={"fit"}
                    bgColor={"primary-1"}
                    rounded="xl"
                    padding={"10px 20px"}
                    justifyContent={"center"}
                    textAlign="center"
                    color="white"
                    transition="all"
                    _hover={{ backgroundColor: "primary-10" }}
                    size={isDesktop ? "xl" : "md"}
                    onClick={() => redirect("/auth/register")}
                >
                    Create an Account now!
                </Button>
            </Stack>

        </Flex>
    )
}