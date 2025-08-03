"use client";

import React, { useState } from "react";
import Card from "@/components/ui/internal/card";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Input from "@/components/ui/internal/input";
import AuthButton from "@/components/ui/internal/auth-button";
import Link from "next/link";

export default function Register() {
  const [fullNameEn, setFullNameEn] = useState("");
  const [fullNameAr, setFullNameAr] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nationalId, setNationalId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (
      !fullNameEn ||
      !fullNameAr ||
      !email ||
      !phone ||
      !nationalId ||
      !password ||
      !confirmPassword
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log({
      fullNameEn,
      fullNameAr,
      email,
      phone,
      nationalId,
      password,
    });
  }

  return (
    <Flex justify="center" w="full" h="fit-content" minH="80vh" align="center">
      <Box maxW="720px" w="full" h="fit-content">
        <Card>
          <form onSubmit={handleSubmit} style={{ width: "100%" }}>
            <Stack w="full" gap={5} align="center" justify="center">
              <Text color="neutral-1" fontSize="2rem">
                Register
              </Text>

              <Stack w="full" alignItems="center">
                <Input
                  placeholder="Full name in English"
                  value={fullNameEn}
                  onChange={(e) => setFullNameEn(e.target.value)}
                />
                <Input
                  placeholder="Full name in Arabic"
                  value={fullNameAr}
                  onChange={(e) => setFullNameAr(e.target.value)}
                />
                <Input
                  placeholder="Email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                  placeholder="Phone number with WhatsApp"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <Input
                  placeholder="National ID"
                  value={nationalId}
                  onChange={(e) => setNationalId(e.target.value)}
                />
                <Input
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder="Confirm password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </Stack>

              <AuthButton text="Create an account" />

              <Flex
                w="full"
                alignItems="center"
                color="neutral-3"
                justify="center"
                gapX={10}
                gapY={5}
                flexWrap="wrap"
              >
                <Link href="/auth/login">
                  <Text textDecoration="underline">
                    Already have an account? Login
                  </Text>
                </Link>
              </Flex>
            </Stack>
          </form>
        </Card>
      </Box>
    </Flex>
  );
}
