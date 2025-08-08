"use client";

import { Button, Link } from "@chakra-ui/react";
import React from "react";

export default function NavButton({
  link,
  text,
  width = "fit",
}: {
  link: string;
  text: string;
  width?: string;
}) {

  return (
    <Link href={link} textDecoration={"none"} width={width}>
      <Button
        variant="outline"
        width={width}
        bgColor={"primary-1"}
        rounded="xl"
        padding={"10px 20px"}
        justifyContent={"center"}
        textAlign="center"
        color="white"
        border={0}
        transition="all"
        _hover={{ backgroundColor: "primary-10" }}
      >
        {text}
      </Button>
    </Link>
  );
}
