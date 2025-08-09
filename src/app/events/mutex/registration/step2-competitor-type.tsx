import { VStack, Flex, Box, Heading, HStack } from "@chakra-ui/react";
import BackButton from "./back-button";
import CustomButton from "./custom-button";

interface Props {
  setCompetitorType: (type: string) => void;
  handleNext: () => void;
  handleBack: () => void;
}

export default function Step2CompetitorType({
  setCompetitorType,
  handleNext,
  handleBack,
}: Props) {
  return (
    <VStack color="neutral-1" gap={6} position="relative">
      <Flex
        justifyContent="center"
        alignItems="center"
        width="100%"
        position="relative"
      >
        <Box position="absolute" left={0}>
          <BackButton handleBack={handleBack} />
        </Box>
        <Box>
          <Heading size="md" textAlign="center">
            You are a:
          </Heading>
        </Box>
      </Flex>
      <HStack gap={5}>
        <CustomButton
          label="Team Leader"
          onClick={() => {
            setCompetitorType("leader");
            handleNext();
          }}
        />
        <CustomButton
          label="Team Member"
          bgColor="primary-11"
          onClick={() => {
            setCompetitorType("member");
            handleNext();
          }}
        />
      </HStack>
    </VStack>
  );
}
