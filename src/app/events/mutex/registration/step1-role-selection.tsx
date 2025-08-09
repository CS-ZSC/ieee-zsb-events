import { VStack, Heading, HStack } from "@chakra-ui/react";
import CustomButton from "./custom-button";

interface Props {
  setRole: (role: string) => void;
  handleNext: () => void;
}

export default function Step1RoleSelection({ setRole, handleNext }: Props) {
  return (
    <VStack color="neutral-1" gap={4}>
      <Heading size="md">Register as:</Heading>
      <HStack gap={5}>
        <CustomButton
          label="Attendee"
          onClick={() => {
            setRole("attendee");
            handleNext();
          }}
        />
        <CustomButton
          label="Competitor"
          bgColor="primary-11"
          onClick={() => {
            setRole("competitor");
            handleNext();
          }}
        />
      </HStack>
    </VStack>
  );
}
