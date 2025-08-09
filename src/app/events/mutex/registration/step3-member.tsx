import {
  VStack,
  Flex,
  Box,
  Heading,
  Button,
  HStack,
  Text,
} from "@chakra-ui/react";
import { Icon } from "@iconify/react";
import BackButton from "./back-button";
import { toaster } from "@/components/ui/toaster";
import NavButton from "@/components/ui/internal/nav-button";

interface Props {
  handleBack: () => void;
}

export default function Step3Member({ handleBack }: Props) {
  console.log("Step 3: Member");

  return (
    <VStack color="neutral-1" gap={6} position="relative">
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        position="relative"
        minW="300px"
      >
        <Box position="absolute" left={0}>
          <BackButton handleBack={handleBack} />
        </Box>
        <Box>
          <Heading size="md" textAlign="center">
            Join a team
          </Heading>
        </Box>
      </Flex>
      <CopyCode code={"ajbja"} />
      <HStack width={"100%"} gap={5}>
        <NavButton link={"/"} text={"Done"} width="100%" />
        <NavButton link={"/account"} text={"See tickets"} width="100%" />
      </HStack>
    </VStack>
  );
}

function CopyCode({ code }: { code: string }) {
  const handleCopy = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    navigator.clipboard.writeText(code);
    toaster.create({
      title: "Code copied!",
      description: `${code} has been copied to your clipboard.`,
      type: "success",
      meta: { closable: true },
    });
  };

  return (
    <HStack
      gapX={6}
      border="1px solid"
      borderColor="primary-3"
      rounded="md"
      p={"4px"}
      color="neutral-2"
      bgColor={"primary-12"}
    >
      <Text pl={4} whiteSpace="nowrap">
        {code}
      </Text>

      <Button
        aria-label="Copy code"
        size="xs"
        color="neutral-2"
        bgColor={"primary-12"}
        _hover={{ bg: "rgba(255, 255, 255, 0.05)" }}
        onClick={handleCopy}
      >
        <Icon icon={"mdi:content-copy"} width={16} height={16} />
      </Button>
    </HStack>
  );
}
