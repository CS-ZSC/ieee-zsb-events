"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Card from "@/components/ui/internal/card";
import { Box, Flex, HStack, Stack, Text } from "@chakra-ui/react";
import Input from "@/components/ui/internal/input";
import AuthButton from "@/components/ui/internal/auth-button";
import Link from "next/link";
import FileUpload from "@/components/ui/internal/auth/file-upload";
import { toaster } from "@/components/ui/toaster";
import PasswordInput from "@/components/ui/internal/password-input";

type RegisterFormData = {
  fullName: string;
  email: string;
  phone: string;
  nationalId: string;
  password: string;
  confirmPassword: string;
  idFrontImage: File | null;
  idBackImage: File | null;
};

export default function Register() {
  const { register, handleSubmit, watch, getValues, setValue, formState: { errors } } = useForm<RegisterFormData>({
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      nationalId: "",
      password: "",
      confirmPassword: "",
      idFrontImage: null,
      idBackImage: null,
    }
  });

  const onSubmit = (data: RegisterFormData) => {
    if (!data.idFrontImage || !data.idBackImage) {
      toaster.error({
        closable: true,
        title: "Missed Fields",
        description: "Please upload both ID card images.",
        duration: 3000
      });
      return;
    }

    if (data.password !== data.confirmPassword) {
      toaster.error({
        closable: true,
        title: "Passwords do not match!",
        description: "Please make sure both passwords match.",
        duration: 3000
      });
      return;
    }

    // logic here

    toaster.success({
      closable: true,
      title: "Registration Successful",
      description: "Your account has been created successfully.",
      duration: 3000
    });

    console.log(data);
  };

  return (
    <Flex justify="center" w="full" h="fit-content" minH="80vh" align="center">
      <Box maxW="720px" w="full" h="fit-content">
        <Card>
          <form onSubmit={handleSubmit(onSubmit)} style={{ width: "100%" }}>
            <Stack w="full" gap={5} align="center" justify="center">
              <Text color="neutral-1" fontSize="2rem">
                Register
              </Text>

              <Stack w="full" alignItems="center">
                <Input
                  label="Full Name"
                  placeholder="John Doe"
                  {...register("fullName", {
                    required: "Full name is required",
                    minLength: { value: 3, message: "Name must be at least 3 characters" }
                  })}
                  isInvalid={!!errors.fullName}
                  errorMessage={errors.fullName?.message}
                />

                <Input
                  label="Email Address"
                  placeholder="example@domain.com"
                  type="email"
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

                <Input
                  label="Phone Number"
                  placeholder="Enter your WhatsApp number"
                  type="tel"
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Invalid phone number"
                    }
                  })}
                  isInvalid={!!errors.phone}
                  errorMessage={errors.phone?.message}
                />

                <Input
                  label="National ID"
                  placeholder="Enter your national ID number"
                  {...register("nationalId", {
                    required: "National ID is required",
                    pattern: {
                      value: /^[0-9]+$/,
                      message: "Invalid National ID"
                    }
                  })}
                  isInvalid={!!errors.nationalId}
                  errorMessage={errors.nationalId?.message}
                />

                <HStack w="fit" align="start" justify={"center"} spaceX={8}>
                  <FileUpload
                    label="ID Front Card"
                    setFile={(file) => setValue("idFrontImage", file)}
                    isRequired
                    isInvalid={!watch("idFrontImage")}
                    errorMessage={!watch("idFrontImage") ? "Front ID image is required" : undefined}
                  />
                  <FileUpload
                    label="ID Back Card"
                    setFile={(file) => setValue("idBackImage", file)}
                    isRequired
                    isInvalid={!watch("idBackImage")}
                    errorMessage={!watch("idBackImage") ? "Back ID image is required" : undefined}
                  />
                </HStack>

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

                <PasswordInput
                  label="Confirm Password"
                  placeholder="Confirm your password"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (val: string) => {
                      if (watch('password') != val) {
                        return "Passwords do not match";
                      }
                    }
                  })}
                  isInvalid={!!errors.confirmPassword}
                  errorMessage={errors.confirmPassword?.message}
                />
              </Stack>

              <AuthButton text="Create an account" type="submit" />

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
