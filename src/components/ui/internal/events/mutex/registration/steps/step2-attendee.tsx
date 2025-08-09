import { VStack, Flex, Box, Heading, Text } from "@chakra-ui/react";
import BackButton from "../back-button";
import CustomButton from "../custom-button";

interface Props {
  handleBack: () => void;
  handleNext: () => void;
}

export default function Step2Attendee({ handleBack, handleNext }: Props) {
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
            Register as an attendee?
          </Heading>
        </Box>
      </Flex>
      <Text color="neutral-2">
        After you register, a ticket will appear in your profile. You can still
        cancel and delete the ticket later.
      </Text>
      <CustomButton label="Register" onClick={handleNext} />
    </VStack>
  );
}
