"use client";
import { useIsAuthenticated, userDataAtom } from "@/atoms/auth";
import Card from "@/components/ui/internal/card";
import { useSetAtom } from "jotai";
import { redirect } from "next/navigation";
import { Button, Heading, Stack, Text } from "@chakra-ui/react";
import { useWindowType } from "@/hooks/use-window-type";
import LogoHorse from "@/components/ui/internal/logo-horse";
import { FiLogOut } from "react-icons/fi";

export default function Logout() {
    const isAuth = useIsAuthenticated();
    const { isDesktop } = useWindowType();
    const setUserData = useSetAtom(userDataAtom);

    if (!isAuth) {
        redirect("/");
    }

    const handleLogout = () => {
        setUserData(null);
    };

    return (
        <Stack w="full" h="full" justify="center" align="center" padding={4}>
            <Card maxW={isDesktop ? "600px" : "100%"} >
                <LogoHorse width={300} height={300} />
                <Stack textAlign={"center"}>
                    <Heading size="md" fontWeight={"bold"}>Are you sure you want to disconnect from the IEEE mainframe?</Heading>
                    <Text>Warning: Logging out may cause a temporary loss of electromagnetic awesomeness!</Text>
                </Stack>
                <Button
                    onClick={handleLogout}
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
                >
                    Logout <FiLogOut />
                </Button>
            </Card>
        </Stack >
    );
}