import { Box, Image, Stack } from "@chakra-ui/react";
import { InnerInfoCard } from "./inner-info-card";
import { EventCardProps } from ".";

export function EventCardDesktop({
  name,
  link,
  image,
  description,
}: EventCardProps) {
  return (
    <Stack
      borderRadius="xl"
      p={4}
      w="full"
      position={"relative"}
      overflow="hidden"
    >
      <Image
        aspectRatio={"16/9"}
        src={image}
        alt={name}
        width="100%"
        height="100%"
        borderRadius="xl"
        border={"1px solid"}
        borderColor={"primary-3"}
      />
      <Box
        w="450px"
        maxH="300px"
        position="absolute"
        borderRadius="xl"
        overflow="hidden"
        left="30px"
        bottom={"30px"}
      >
        <InnerInfoCard name={name} link={link} description={description} />
      </Box>
    </Stack>
  );
}
