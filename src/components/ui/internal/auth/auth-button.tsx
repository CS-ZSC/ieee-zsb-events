import { Button } from "@chakra-ui/react";
import React from "react";

export default function AuthButton({ text }: { text: string }) {
  return (
    <Button
      w={"full"}
      maxW={"400px"}
      size="lg"
      type="submit"
      fontSize={"1.2rem"}
      borderRadius={"10px"}
      padding={"global-spacing"}
      bgColor={"primary-1"}
      color={"white"}
      transition={"all 0.2s ease-in-out"}
      _hover={{
        bgColor: "primary-2",
      }}
    >
      {text}
    </Button>
  );
}
