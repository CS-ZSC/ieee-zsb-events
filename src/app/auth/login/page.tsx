"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/internal/card";
import { Box, Flex, Stack, Text } from "@chakra-ui/react";
import Input from "@/components/ui/internal/input";
import AuthButton from "@/components/ui/internal/auth-button";
import Link from "next/link";
import PasswordInput from "@/components/ui/internal/password-input";

type LoginFormData = {
  email: string;
  password: string;
};

export default function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    }
  });

  const onSubmit = (data: LoginFormData) => {
    console.log("Form data:", data);
  };

  return (
    <Flex justify="center" w="full" h="40vw" align="center">
      <Box maxW="720px" w="full" h="fit-content">
        <Card>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <Stack w="full" gap={5} align="center" justify="center">
              <Text color="neutral-1" fontSize="2rem">
                Login
              </Text>

              <Stack w="full" alignItems="center">
                <Input
                  label="Email Address"
                  placeholder="example@domain.com"
                  // type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address"
                    }
                  })}
                  isInvalid={!!errors.email}
                  errorMessage={errors.email?.message}
                />

                <PasswordInput
                  label="Password"
                  placeholder="Enter your password"
                  {...register("password", {
                    required: "Password is required",
                    minLength: { value: 8, message: "Password must be at least 8 characters" }
                  })}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password?.message}
                />


              </Stack>

              <AuthButton text="Login" type="submit" />

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
