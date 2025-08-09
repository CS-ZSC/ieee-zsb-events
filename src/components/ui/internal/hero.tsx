"use client";
import { useWindowType } from "@/hooks/use-window-type";
import { Button, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import LogoHorse from "./logo-horse";
import { redirect } from "next/navigation";
import { useAtom } from "jotai";
import { userDataAtom } from "@/atoms/user";

export function Hero() {
    const { isDesktop } = useWindowType();
    const [userData] = useAtom(userDataAtom);
    return (
        <Flex direction={isDesktop ? "row-reverse" : "column"} align={"center"} justify={"center"} w="full" spaceX={isDesktop ? 20 : 0} padding={isDesktop ? 10 : 2}>
            <LogoHorse type="blue" height={isDesktop ? 820 : 400} width={isDesktop ? 820 : 320} />
            <Stack align={isDesktop ? "start" : "center"} justify={"center"} spaceY={4} maxW={isDesktop ? "500px" : "full"}>
                <Heading size="3xl">
                    Events and Competitions gate
                </Heading>
                <Stack textAlign={isDesktop ? "start" : "center"} maxW={isDesktop ? "500px" : "full"} spaceY={-2} fontSize={"lg"}>
                    {userData ? (
                        <>
                            <Text>Welcome back! Discover our latest events and competitions.</Text>
                            <Text>Browse through exciting opportunities to showcase your skills and win amazing prizes.</Text>
                        </>
                    ) : (
                        <>
                            <Text>Discover exciting events and competitions organized by IEEE-ZSB.</Text>
                            <Text>Join our community today to participate in events, compete with peers, and unlock exclusive opportunities!</Text>
                        </>
                    )}
                </Stack>
                {!userData && <Button
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
                    Join the Tech Revolution!
                </Button>}
            </Stack>
        </Flex>
    )
}