"use client";

import { Button, Link } from "@chakra-ui/react";
import React from "react";

export default function NavButton({
  link,
  text,
  width = "fit",
  bgColor = "primary-1",
  color = "white",
}: {
  link: string;
  text: string;
  width?: string;
  bgColor?: string;
  color?: string;
}) {
  return (
    <Link href={link} textDecoration={"none"} width={width} target="_blank">
      <Button
        variant="outline"
        width={width}
        bgColor={bgColor}
        rounded="xl"
        padding={"10px 20px"}
        justifyContent={"center"}
        textAlign="center"
        color={color}
        border={0}
        transition="all"
        _hover={{ opacity: 0.8 }}
      >
        {text}
      </Button>
    </Link>
  );
}
