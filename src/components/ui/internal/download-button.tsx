import { Button, Link } from "@chakra-ui/react";
import React from "react";

interface DownloadButtonProps {
  link: string;
  text: string;
}

export default function DownloadButton({ link, text }: DownloadButtonProps) {
  return (
    <Link href={link} download target="_blank" rel="noopener noreferrer">
      <Button
        textAlign="center"
        rounded="xl"
        padding={"10px 20px"}
        bgColor={"primary-8"}
        color="black"
        border={0}
        fontSize={"sm"}
        textDecoration={"none"}
        outline={"none"}
        transition="all"
        _hover={{ opacity: 0.8 }}
      >
        {text}
      </Button>
    </Link>
  );
}
