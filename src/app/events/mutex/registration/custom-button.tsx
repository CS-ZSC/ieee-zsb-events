import { Button, ButtonProps } from "@chakra-ui/react";

interface CustomButtonProps extends ButtonProps {
  label: string;
}

export default function CustomButton({ label, ...props }: CustomButtonProps) {
  return (
    <Button
      color="neutral-1"
      bgColor="primary-1"
      paddingX={10}
      rounded="xl"
      _hover={{ opacity: 0.9 }}
      {...props}
    >
      {label}
    </Button>
  );
}
