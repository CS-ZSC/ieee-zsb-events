import { Flex, Image, Stack } from "@chakra-ui/react";
import { InnerInfoCard } from "./inner-info-card";

export function EventCardMobile({ name, link, image, description }: EventCardProps) {
  return (
    <Flex spaceY={0} direction={"column"} justify={"center"} alignItems="center" w="full">
      <Image src={image} alt={name} width="100%" height="auto" borderTopRadius="xl" />
      <InnerInfoCard name={name} link={link} description={description} />
    </Flex>
  );
}