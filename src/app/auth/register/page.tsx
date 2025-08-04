import Card from "@/components/ui/internal/card";
import { Box, Flex, Heading, Stack } from "@chakra-ui/react";

export default function Login() {
    return (
        <Flex justify={"center"} w="full" h={"40vw"} align={"center"}>
            <Box maxW={"720px"} w="full" h="fit-content">
                <Card>
                    <Stack w="full" px={16} align={"center"} justify={"start"}>
                        <Heading>Register</Heading>
                    </Stack>
                </Card>
            </Box>
        </Flex>
    );
}