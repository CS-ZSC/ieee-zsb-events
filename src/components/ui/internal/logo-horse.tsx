"use client";
import NextImage from "next/image";
import { Box, Image } from "@chakra-ui/react";
import { useColorModeValue } from "@/components/ui/color-mode";
export interface LogoOptions {
  type?: LogoType;
  width?: number;
  height?: number;
}
export type LogoType = "black" | "white" | "blue";

export default function Logo({ width, height, type }: LogoOptions) {
  const defaultColor = useColorModeValue("black", "white");
  const logoType: LogoType = type ?? defaultColor;

  return (
    <Box>
      {width && height ? (
        <Image
          asChild
          transition="all 0.2s ease-in-out"
          _hover={{ opacity: 0.9 }}
          alt="IEEE-ZSB Horse"
          objectFit={"cover"}
          w={width}
          h={height}
        >
          <NextImage
            src={`/images/ieee/ieee-horse-${logoType}.svg`}
            alt="IEEE-ZSB Logo"
            width={width}
            height={height}
          />
        </Image>
      ) : (
        <Image
          src={`/images/ieee/ieee-horse-${logoType}.svg`}
          alt="IEEE-ZSB Horse"
          width={width ?? "auto"}
          height={height ?? "auto"}
          transition="all 0.2s ease-in-out"
          _hover={{ opacity: 0.9 }}
          objectFit={"cover"}
        />)}
    </Box>
  );
}

