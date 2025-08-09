import { Button } from "@chakra-ui/react";
import { Icon } from "@iconify/react";

export default function BackButton({ handleBack }: { handleBack: () => void }) {
  return (
    <Button
      onClick={handleBack}
      color="neutral-1"
      bgColor="primary-11"
      rounded="lg"
      p={2}
      _hover={{ opacity: 0.9 }}
    >
      <Icon icon="mdi:arrow-left" width={20} height={20} />
      Back
    </Button>
  );
}
