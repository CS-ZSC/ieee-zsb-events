"use client";
import NextImage from "next/image";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useColorModeValue } from "@/components/ui/color-mode";
interface LogoOptions {
  type?: LogoType;
  width?: number;
  height?: number;
}
export type LogoType = "black" | "white" | "blue";

export default function Logo({ width, height, type }: LogoOptions) {
  const defaultColor = useColorModeValue("black", "white");
  const logoType: LogoType = type ?? defaultColor;

  return (
    <Link href="/" passHref>
      {width && height ? (
        <NextImage
          src={`/images/ieee/ieee-logo-${logoType}.svg`}
          alt="IEEE-ZSB Logo"
          width={width}
          height={height}
          transition="all 0.2s ease-in-out"
          _hover={{ opacity: 0.9 }}
        />
      ) : (
        <Image
          src={`/images/ieee/ieee-logo-${logoType}.svg`}
          alt="IEEE-ZSB Logo"
          width={width ?? "auto"}
          height={height ?? "auto"}
          transition="all 0.2s ease-in-out"
          _hover={{ opacity: 0.9 }}
        />)}
    </Link>
  );
}
