"use client";

import React, { useState } from "react";
import Card from "@/components/ui/internal/card";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Input from "@/components/ui/internal/input";
import AuthButton from "@/components/ui/internal/auth-button";
import Link from "next/link";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  }

  return (
    <Flex justify="center" w="full" h="40vw" align="center">
      <Box maxW="720px" w="full" h="fit-content">
        <Card>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Stack w="full" gap={5} align="center" justify="center">
              <Text color="neutral-1" fontSize="2rem">
                Login
              </Text>

              <Stack w="full" alignItems="center">
                <Input
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Stack>

              <AuthButton text="Login" />

              <Flex
                w="full"
                alignItems="center"
                color="neutral-3"
                justify="center"
                gapX={10}
                gapY={5}
                flexWrap="wrap"
              >
                <Link href="/auth/register">
                  <Text textDecoration="underline">
                    New? Let&apos;s register you!
                  </Text>
                </Link>
                <Link href="/auth/forgot-password">
                  <Text textDecoration="underline">Forgot your password?</Text>
                </Link>
              </Flex>
            </Stack>
          </form>
        </Card>
      </Box>
    </Flex>
  );
}
