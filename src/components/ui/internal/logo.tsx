"use client";
import { Image } from "@chakra-ui/react";
import Link from "next/link";
import { useColorMode } from "@/components/ui/color-mode";
interface LogoOptions {
  logoType: LogoType;
  width: number;
  height: number;
}
export enum LogoType {
  Blue = "blue",
  White = "white",
  Black = "black",
}

export default function Logo({ width, height }: LogoOptions) {
  const { colorMode } = useColorMode();
  const __logoType = colorMode === "light" ? LogoType.Black : LogoType.White;

  return (
    <Link href="/" passHref>
      <Image
        src={`/images/ieee/ieee-logo-${__logoType}.svg`}
        alt="IEEE-ZSB Logo"
        width={width}
        height={height}
        transition="all 0.2s ease-in-out"
        _hover={{ opacity: 0.9 }}
      />
    </Link>
  );
}
