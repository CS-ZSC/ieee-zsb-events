"use client"

import ButtonLink from '@/components/ui/internal/button-link'
import Logo from '@/components/ui/internal/logo'
import { useWindowType } from '@/hooks/use-window-type';
import { Box, Flex, Heading, Link, Stack, Text } from '@chakra-ui/react'

export default function NotFound() {
    const { isDesktop } = useWindowType();
    return (
        <Stack w="full" h="full" justifyContent="center" alignItems="center" spaceY={8}>
            <Flex direction={isDesktop ? "row" : "column"} align={"center"} justify={"center"} spaceX={isDesktop ? 2 : 0} spaceY={isDesktop ? 0 : 2}>

                <Box width={isDesktop ? "400px" : "320px"} borderRightColor={"primary-2"} borderRightWidth={isDesktop ? 4 : 0} paddingLeft={isDesktop ? 4 : 0} py={isDesktop ? 2 : 0}>
                    <Logo type={"blue"} />
                </Box>
                <Box width={isDesktop ? "400px" : "fit-content"} textAlign={"center"} paddingLeft={isDesktop ? 4 : 0} pt={isDesktop ? 0 : 8} pb={isDesktop ? 0 : -4}>
                    <Heading fontSize={"9xl"}>404</Heading>
                </Box>
            </Flex>
            <Box maxW={"720px"} paddingX={isDesktop ? 0 : "var(--global-spacing)"}>

                <Stack justify={"center"} align="center" spaceY={8}>
                    <Heading size="4xl">
                        Signal Not Found
                    </Heading>
                    <Box
                        ml={4} borderLeftColor="primary-1" borderLeftWidth={4} paddingLeft={4} py={2}
                    >
                        <Text fontSize={"lg"}>
                            Oops! Looks like you&apos;ve wandered off the IEEE circuit.
                            Even our best engineers can&apos;t find this page. Maybe it&apos;s hiding in a <Link textDecorationStyle={"wavy"} textDecoration={"underline"} href='https://en.wikipedia.org/wiki/Faraday_cage' target="_blank">Faraday cage</Link>?
                        </Text>
                    </Box>

                    <ButtonLink link='/' text="Back to the Mainframe" />
                </Stack>
            </Box>
        </Stack>
    )
}