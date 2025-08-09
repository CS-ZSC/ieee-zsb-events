import { useAuth } from "@/atoms/auth";
import Card from "../card";
import { Avatar, Box, Button, Clipboard, Flex, Heading, HStack, SimpleGrid, Stack, Text, useClipboard } from "@chakra-ui/react";
import { toaster } from "../../toaster";
import { useState } from "react";
import { useWindowType } from "@/hooks/use-window-type";
import { redirect } from "next/navigation";
import { MdOutlineEmail, MdOutlineKey, MdOutlinePermIdentity } from "react-icons/md";

export default function Profile() {
    const userData = useAuth();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { isDesktop } = useWindowType();

    if (userData === null)
        return <div display="none" />


    return (
        <Box position={"relative"} w="full">
            <Avatar.Root size={"xl"} onClick={() => setIsOpen(!isOpen)}>
                <Avatar.Fallback name={userData.name} />
                <Avatar.Image src={userData.profileImageURL} />
            </Avatar.Root>
            {isOpen && <Box zIndex={100} position={"absolute"} right={"-20px"} top={"70px"} w={"full"} maxW={isDesktop ? "450px" : "95vw"} minW={isDesktop ? "450px" : "95vw"}>
                <Card gap={2}>
                    <HStack w="full" justify={"start"} spaceX={8}>
                        <Avatar.Root size="2xl" onClick={() => setIsOpen(!isOpen)}>
                            <Avatar.Fallback name={userData.name} />
                            <Avatar.Image src={userData.profileImageURL} />
                        </Avatar.Root>
                        <Stack spaceY={-2}>
                            <Heading size="xl" fontWeight={"bold"}>{userData.name}</Heading>
                            <HStack color="neutral-3">
                                <MdOutlineEmail size={20} />
                                <Text overflow={"hidden"}>
                                    {userData.email}
                                </Text>
                            </HStack>
                            <Clipboard.Root value={userData.inviteUserToken} timeout={1000} onStatusChange={(e) => {
                                if (e.copied)
                                    toaster.create({
                                        type: "info",
                                        title: "Invite token Copied!",
                                        description: `Your invite token (${userData.inviteUserToken}) has been copied to your clipboard.`
                                    })
                            }}>
                                <Clipboard.Trigger asChild>
                                    <HStack align={"center"} justify={"space-between"} >
                                        <HStack color="neutral-3">
                                            <MdOutlineKey size={20} />
                                            <Text>
                                                Invite Token: {" "}
                                                <Clipboard.ValueText />
                                            </Text>
                                        </HStack>
                                        <Clipboard.Indicator />
                                    </HStack>
                                </Clipboard.Trigger>
                            </Clipboard.Root>
                        </Stack>
                    </HStack>
                    <SimpleGrid w="full" justify={"center"} align={"center"} gap={2}>
                        <Button
                            size={isDesktop ? "lg" : "sm"}
                            type="submit"
                            fontSize={"1.2rem"}
                            borderRadius={"10px"}
                            padding={"global-spacing"}
                            bgColor={"primary-1"}
                            color={"white"}
                            transition={"all 0.2s ease-in-out"}
                            _hover={{
                                bgColor: "primary-2",
                            }}
                            onClick={() => redirect("/profile")}
                          >Profile</Button>
                        <Button
                            color="primary-9"
                            bg="primary-8"
                            size={isDesktop ? "lg" : "sm"}
                            type="submit"
                            fontSize={"1.2rem"}
                            borderRadius={"10px"}
                            padding={"global-spacing"}
                            transition={"all 0.2s ease-in-out"}
                            _hover={{
                                opacity: 0.9
                            }}
                            onClick={() => redirect("/auth/logout")}
                        >Logout
                        </Button>
                    </SimpleGrid>
                </Card>
            </Box>}
        </Box>
    )
} 